import axios from "axios";
import { Task } from "../types/taskTypes";

const getTasks = async (listId: string) => {
  const { data } = await axios.get(`http://localhost:8000/tasks/${listId}`);
  return data.tasks ?? [];
};

const deleteTasks = async (selectedTaskIds: string[]) => {
  return axios.post("http://localhost:8000/tasks/delete", {
    tasks: selectedTaskIds,
  });
};

const createNewTask = async (listId: string) => {
  return axios.post("http://localhost:8000/tasks/create", {
    name: "Untitled Task",
    description: "description",
    completed: false,
    unixTime: "",
    listId,
  });
};

const updateTask = async (task: Task, deadline: string) => {
  return axios.post("http://localhost:8000/tasks/update", {
    ...task,
    unixTime: deadline,
  });
};

const completeTask = async (task: Task) => {
  const status = !task.completed;
  if (status === true) {
    await Promise.allSettled([
      axios.post("http://localhost:8000/subscriptions/notification", {
        type: "NOTIFICATION_TASK_COMPLETED",
      }),
      axios.post("http://localhost:8000/tasks/update", {
        ...task,
        completed: status,
      }),
    ]);
  } else {
    await axios.post("http://localhost:8000/tasks/update", {
      ...task,
      completed: status,
    });
  }
};

const moveTasks = (listId: string, tasks: string[]) => {
  return axios.post("http://localhost:8000/tasks/move", {
    listId,
    tasks,
  });
};

export {
  getTasks,
  deleteTasks,
  createNewTask,
  updateTask,
  completeTask,
  moveTasks,
};
