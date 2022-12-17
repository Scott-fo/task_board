import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import axios from "axios";

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

const SignupModal = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/subscriptions/create", {
      email,
      firstName,
    });
    handleClose();
  };

  return (
    <div>
      <React.Fragment key={"bottom"}>
        <Button onClick={handleOpen}>
          <InboxIcon />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1
              id="modal-modal-title"
              className="text-center font-bold text-lg mb-4"
            >
              Sign up to receive emails when tasks are completed or miss their
              deadline
            </h1>
            <form className="flex flex-col p-4" onSubmit={handleSubmit}>
              <input
                className="m-4 border border-slate-200 p-4 rounded-md"
                placeholder="Enter email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="m-4 border border-slate-200 p-4 rounded-md"
                placeholder="Enter first name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="cursor-pointer text-blue-500 border border-blue-200 rounded-md hover:text-white hover:bg-blue-500 m-4"
                type="submit"
                value="Submit"
              />
            </form>
          </Box>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export { SignupModal };
