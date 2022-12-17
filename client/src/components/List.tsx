import axios from "axios";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setActiveList, updateLists } from "../features/lists/listSlice";

export interface ListInterface {
  id: string;
  name: string;
}

const List = () => {
  const lists = useAppSelector((state) => state.listReducer.lists);
  const listId = useAppSelector((state) => state.listReducer.id);
  const dispatch = useAppDispatch();

  const getLists = async () => {
    const { data } = await axios.get("http://localhost:8000/lists");
    dispatch(updateLists(data.lists || []));
  };

  useEffect(() => {
    getLists();
  }, []);

  const createList = async () => {
    await axios.post("http://localhost:8000/lists/create", {
      name: "Untitled",
    });
    getLists();
  };

  const deleteList = async (id: string) => {
    await axios.post("http://localhost:8000/lists/delete", { id });
    getLists();
  };

  const updateActiveList = (name: string, id: string) => {
    dispatch(setActiveList({ name, id }));
  };

  const parseLists = (list: ListInterface) => {
    return (
      <div
        key={list.id}
        className={`flex justify-between ${
          list.id === listId ? "bg-gray-200" : "bg-white"
        }`}
      >
        <li
          className="text-lg font-medium hover:text-blue-500 pl-2 cursor-pointer"
          onClick={() => updateActiveList(list.name, list.id)}
        >
          {list.name}
        </li>
        <button
          key={list.id}
          className="pr-2 hover:text-red-500 text-xl"
          onClick={() => deleteList(list.id)}
        >
          -
        </button>
      </div>
    );
  };

  const parsedLists = lists.map(parseLists);

  return (
    <div className="h-[96%] border-r-2 w-1/4 overflow-auto">
      <div className="flex justify-between p-4">
        <h1 className="font-bold text-2xl">Lists</h1>
        <button className="text-2xl" onClick={createList}>
          +
        </button>
      </div>
      <ul className="flex flex-col pt-4">{parsedLists}</ul>
    </div>
  );
};

export { List };
