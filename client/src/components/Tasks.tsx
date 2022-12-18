import React, { useState, useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { TaskFooter } from "./TaskFooter";
import { DateTime } from "luxon";
import { completeTask, getTasks, updateTask } from "../api/TasksApi";
import { Task, EditingTask } from "../types/taskTypes";
import { getParsedTime, validateDateInput } from "../utils/taskUtils";

const Tasks = () => {
  const listId = useAppSelector((state) => state.listReducer.id);
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [editingState, setEditingState] = useState<EditingTask>(
    {} as EditingTask
  );
  const [editing, setEditing] = useState<{ id: string; state: boolean }>({
    id: "",
    state: false,
  });

  const handleGetTasks = async () => {
    const tasks = await getTasks(listId);
    setError("");
    setTasks(tasks);
  };

  const handleUpdateTask = async (task: EditingTask) => {
    const { deadline, error } = validateDateInput(task.parsedTime);
    if (error !== "") {
      setError(error);
    } else {
      await updateTask(task, deadline);
      setEditing({ id: task.id, state: false });
      handleGetTasks();
    }
  };

  const handleCompleteTask = async (task: Task) => {
    await completeTask(task);
    handleGetTasks();
  };

  const toggleTask = (id: string) => {
    if (selectedTaskIds.includes(id)) {
      setSelectedTaskIds(selectedTaskIds.filter((entry) => entry !== id));
    } else {
      setSelectedTaskIds([...selectedTaskIds, id]);
    }
  };

  const handleEditing = (task: Task, state: boolean) => {
    setEditing({ id: task.id, state });
    setSelectedTaskIds(selectedTaskIds.filter((entry) => entry !== task.id));
    setEditingState({
      ...task,
      completed: task.completed ?? false,
      parsedTime: getParsedTime(task.unixTime),
    } as EditingTask);
  };

  useEffect(() => {
    if (open !== true) {
      handleGetTasks();
      setSelectedTaskIds([]);
    }
  }, [listId, open]);

  const parseTasks = (task: Task) => {
    const parsedTime = getParsedTime(task.unixTime);
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
                onClick={() => handleUpdateTask(editingState as EditingTask)}
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
                  onClick={() => handleCompleteTask(task)}
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
      <div className="p-4 text-red-500">
        {error !== "" && <span>{error}</span>}
      </div>
      <div className="">{parsedTasks}</div>
      <div>
        <TaskFooter
          selectedTaskIds={selectedTaskIds}
          setSelectedTaskIds={setSelectedTaskIds}
          open={open}
          setOpen={setOpen}
          handleGetTasks={handleGetTasks}
          setError={setError}
        />
      </div>
    </div>
  );
};

export { Tasks };
