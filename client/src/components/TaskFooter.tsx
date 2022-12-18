import React, { useState } from "react";
import { MoveTaskModal } from "./MoveTasksModal";
import { createNewTask, deleteTasks } from "../api/TasksApi";
import { useAppSelector } from "../app/hooks";

const TaskFooter = ({
  open,
  setOpen,
  selectedTaskIds,
  setSelectedTaskIds,
  handleGetTasks,
  setError,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTaskIds: string[];
  setSelectedTaskIds: React.Dispatch<React.SetStateAction<string[]>>;
  handleGetTasks: () => Promise<void>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const listId = useAppSelector((state) => state.listReducer.id);
  const listName = useAppSelector((state) => state.listReducer.name);

  const handleDeleteTasks = async () => {
    await deleteTasks(selectedTaskIds);
    setSelectedTaskIds([]);
    handleGetTasks();
  };

  const handleCreateNewTask = async () => {
    if (listName === "No List Selected") {
      setError("Please create a list first");
    } else {
      await createNewTask(listId);
      handleGetTasks();
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2"
        onClick={handleCreateNewTask}
      >
        CREATE
      </button>
      <MoveTaskModal selected={selectedTaskIds} open={open} setOpen={setOpen} />
      <button
        className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2"
        onClick={handleDeleteTasks}
      >
        DELETE
      </button>
    </div>
  );
};

export { TaskFooter };
