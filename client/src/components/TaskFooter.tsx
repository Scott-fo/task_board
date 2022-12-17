import React, { useState } from "react";
import { MoveTaskModal } from "./MoveTasksModal";

const TaskFooter = ({
  createNewTask,
  deleteTasks,
  selected,
  open,
  setOpen,
}: {
  createNewTask: () => Promise<void>;
  deleteTasks: () => Promise<void>;
  selected: string[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-center">
      <button
        className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2"
        onClick={createNewTask}
      >
        CREATE
      </button>
      <MoveTaskModal selected={selected} open={open} setOpen={setOpen} />
      <button
        className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2"
        onClick={deleteTasks}
      >
        DELETE
      </button>
    </div>
  );
};

export { TaskFooter };
