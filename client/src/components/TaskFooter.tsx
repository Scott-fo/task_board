import React from "react";

const TaskFooter = ({
  createNewTask,
  deleteTasks,
}: {
  createNewTask: () => Promise<void>;
  deleteTasks: () => Promise<void>;
}) => {
  return (
    <div className="flex justify-center">
      <button
        className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2"
        onClick={createNewTask}
      >
        CREATE
      </button>
      <button className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2">
        MOVE
      </button>
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
