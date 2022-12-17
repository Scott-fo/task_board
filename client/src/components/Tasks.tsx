import React, { useState, useEffect } from "react";
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

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editing, setEditing] = useState<{ id: string; state: boolean }>({
    id: "",
    state: false,
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [editingState, setEditingState] = useState<Task>();

  const listId = useAppSelector((state) => state.listReducer.id);

  const getTasks = async () => {
    const { data } = await axios.get(`http://localhost:8000/tasks/${listId}`);
    setTasks(data.tasks ?? []);
  };

  useEffect(() => {
    getTasks();
    setSelected([]);
  }, [listId]);

  const newTask: Partial<Task> = {
    name: "Untitled Task",
    description: "description",
    listId,
    completed: false,
    unixTime: "1",
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

  const handleEditing = (id: string, state: boolean, task: Task) => {
    setEditing({ id, state });
    setEditingState({
      id,
      name: task.name,
      description: task.description,
      listId: task.listId,
      completed: task.completed ?? false,
      unixTime: task.unixTime,
    } as Task);
  };

  const updateTask = async ({
    id,
    name,
    description,
    listId,
    unixTime,
    completed,
  }: Task) => {
    setEditing({ id, state: false });
    await axios.post("http://localhost:8000/tasks/update", {
      id,
      name,
      listId,
      description,
      unixTime,
      completed,
    });
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
                      } as Task)
                    }
                  />
                </div>
                <input className="font-bold text-right" value={parsedTime} />
              </div>
              <input
                onChange={(e) =>
                  setEditingState({
                    ...editingState,
                    description: e.target.value,
                  } as Task)
                }
                value={editingState?.description}
              />
            </div>
            <button
              className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2 w-full"
              onClick={() => updateTask({ ...editingState } as Task)}
            >
              SAVE
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <input type="checkbox" onChange={() => toggleTask(task.id)} />
                <span className="pl-4 font-bold">{task.name}</span>
                <button
                  onClick={() => handleEditing(task.id, true, task)}
                  className="pl-2 text-sm italic hover:underline"
                >
                  Edit
                </button>
              </div>
              <span className="font-bold">{parsedTime}</span>
            </div>
            <span>{task.description}</span>
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
        <TaskFooter createNewTask={createNewTask} deleteTasks={deleteTasks} />
      </div>
    </div>
  );
};

export { Tasks };
