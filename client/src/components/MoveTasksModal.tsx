import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAppSelector } from "../app/hooks";
import { moveTasks } from "../api/TasksApi";
import { ListInterface } from "../types/listTypes";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MoveTaskModal = ({
  selected,
  open,
  setOpen,
}: {
  selected: string[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const lists = useAppSelector((state) => state.listReducer.lists);
  const handleOpen = () => {
    if (selected.length > 0) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  const handleMove = async (id: string) => {
    await moveTasks(id, selected);
    handleClose();
  };

  const parseLists = (list: ListInterface) => {
    return (
      <li key={list.id} className="pt-4">
        <button className="hover:underline" onClick={() => handleMove(list.id)}>
          {list.name}
        </button>
      </li>
    );
  };

  const parsedLists = lists.map(parseLists);

  return (
    <div>
      <button
        className="pl-8 pr-8 pt-4 pb-4 border border-black rounded-lg hover:bg-red-500 hover:text-white m-2"
        onClick={handleOpen}
      >
        MOVE
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 id="modal-modal-title" className="font-bold text-lg mb-4">
            Select Target List
          </h1>
          <ul id="modal-modal-description">{parsedLists}</ul>
        </Box>
      </Modal>
    </div>
  );
};

export { MoveTaskModal };
