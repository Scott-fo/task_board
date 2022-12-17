import React, { useState, useEffect } from "react";
import z from "zod";
import axios from "axios";
import { useAppSelector } from "../app/hooks";
import { TaskFooter } from "./TaskFooter";
import { DateTime } from "luxon";

export interface Task {
  id: string;
  name: string;
  description: string;
  listId: string;
  unixTime: string;
  completed?: boolean;
}

interface EditingTask extends Task {
  parsedTime: string;
}

const Tasks = () => {
  const [open, setOpen] = React.useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editing, setEditing] = useState<{ id: string; state: boolean }>({
    id: "",
    state: false,
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [editingState, setEditingState] = useState<EditingTask>();

  const listId = useAppSelector((state) => state.listReducer.id);

  const getTasks = async () => {
    const { data } = await axios.get(`http://localhost:8000/tasks/${listId}`);
    setTasks(data.tasks ?? []);
  };

  useEffect(() => {
    if (open !== true) {
      getTasks();
      setSelected([]);
    }
  }, [listId, open]);

  const newTask: Partial<Task> = {
    name: "Untitled Task",
    description: "description",
    listId,
    completed: false,
    unixTime: "",
  };

  const deleteTasks = async () => {
    await axios.post("http://localhost:8000/tasks/delete", {
      tasks: selected,
    });
    getTasks();
    setSelected([]);
  };

  const createNewTask = async () => {
    await axios.post("http://localhost:8000/tasks/create", {
      ...newTask,
    });
    getTasks();
  };

  const toggleTask = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((entry) => entry !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleEditing = (task: Task, state: boolean) => {
    setEditing({ id: task.id, state });
    setSelected(selected.filter((entry) => entry !== task.id));
    setEditingState({
      ...task,
      completed: task.completed ?? false,
      parsedTime:
        task.unixTime && task.unixTime !== ""
          ? DateTime.fromSeconds(parseInt(task.unixTime)).toLocaleString()
          : "",
    } as EditingTask);
  };

  const validateDateInput = (): { deadline: string; error: string } => {
    if (editingState?.parsedTime !== "") {
      const dateSchema = z.preprocess((arg) => {
        if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
      }, z.date());

      const result = dateSchema.safeParse(
        DateTime.fromFormat(editingState!.parsedTime, "dd/MM/yyyy").toJSDate()
      );
      if (result.success === false) {
        return { deadline: "", error: "Enter valid date" };
      } else {
        const deadline = DateTime.fromJSDate(result.data).toSeconds();
        if (deadline < DateTime.now().toSeconds()) {
          return { deadline: "", error: "Please enter a date in the future" };
        } else {
          return { deadline: deadline.toString(), error: "" };
        }
      }
    } else {
      return { deadline: "", error: "" };
    }
  };

  const updateTask = async (task: Task) => {
    const { deadline, error } = validateDateInput();
    if (error !== "") {
      console.log(error);
    } else {
      await axios.post("http://localhost:8000/tasks/update", {
        ...task,
        unixTime: deadline,
      });
      getTasks();
      setEditing({ id: task.id, state: false });
    }
  };

  const completeTask = async (task: Task) => {
    const status = !task.completed;
    await axios.post("http://localhost:8000/tasks/update", {
      ...task,
      completed: status,
    });

    if (status === true) {
      await axios.post("http://localhost:8000/subscriptions/notification", {
        type: "NOTIFICATION_TASK_COMPLETED",
      });
    }
    getTasks();
  };

  const parseTasks = (task: Task) => {
    const parsedTime =
      task.unixTime && task.unixTime !== ""
        ? DateTime.fromSeconds(parseInt(task.unixTime)).toLocaleString()
        : "";
    return (
      <div
        className="flex flex-col border border-black rounded-lg h-auto p-8 m-4"
        key={task.id ?? ""}
      >
        {editing.id === task.id && editing.state ? (
          <div>
            <div>
              <div className="flex justify-between">
                <div className="flex">
                  <input type="checkbox" onChange={() => toggleTask(task.id)} />
                  <input
                    className="pl-4 font-bold"
                    value={editingState?.name}
                    onChange={(e) =>
                      setEditingState({
                        ...editingState,
                        name: e.target.value,
                      } as EditingTask)
                    }
                  />
                </div>
                <input
                  className="font-bold text-right"
                  value={editingState?.parsedTime}
                  onChange={(e) =>
                    setEditingState({
                      ...editingState,
                      parsedTime: e.target.value,
                    } as EditingTask)
                  }
                  placeholder={"dd/mm/yyyy"}
                />
              </div>
              <textarea
                className="w-full"
                onChange={(e) =>
                  setEditingState({
                    ...editingState,
                    description: e.target.value,
                  } as EditingTask)
                }
                value={editingState?.description}
              />
            </div>
            <div className="flex">
              <button
                className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2 w-full"
                onClick={() => updateTask(editingState as Task)}
              >
                SAVE
              </button>
              <button
                className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2 w-full"
                onClick={() => setEditing({ id: task.id, state: false })}
              >
                CANCEL
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <input type="checkbox" onChange={() => toggleTask(task.id)} />
                <span
                  className={`pl-4 font-bold ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.name}
                </span>
                <button
                  onClick={() => handleEditing(task, true)}
                  className="pl-2 text-sm italic hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => completeTask(task)}
                  className="pl-2 text-sm italic hover:underline"
                >
                  {task.completed ? "Undo Complete" : "Complete"}
                </button>
              </div>
              <span
                className={`font-bold ${task.completed ? "line-through" : ""} ${
                  parsedTime !== "" &&
                  parseInt(task.unixTime) < DateTime.now().toSeconds()
                    ? "text-red-500"
                    : ""
                }`}
              >
                {parsedTime}
              </span>
            </div>
            <span className={`${task.completed ? "line-through" : ""}`}>
              {task.description}
            </span>
          </div>
        )}
      </div>
    );
  };

  const parsedTasks = tasks.map(parseTasks);

  return (
    <div className="h-[90%] overflow-auto">
      <div className="">{parsedTasks}</div>
      <div>
        <TaskFooter
          selected={selected}
          open={open}
          setOpen={setOpen}
          createNewTask={createNewTask}
          deleteTasks={deleteTasks}
        />
      </div>
    </div>
  );
};

export { Tasks };
