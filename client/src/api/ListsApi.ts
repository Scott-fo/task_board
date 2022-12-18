import axios from "axios";

const getLists = async () => {
  const { data } = await axios.get("http://localhost:8000/lists");
  return data.lists ?? [];
};

const createList = async () => {
  return axios.post("http://localhost:8000/lists/create", {
    name: "Untitled",
  });
};

const deleteList = async (id: string) => {
  return axios.post("http://localhost:8000/lists/delete", { id });
};

const updateList = async (name: string, id: string) => {
  return axios.post("http://localhost:8000/lists/update", {
    id,
    name,
  });
};

export { getLists, createList, deleteList, updateList };
