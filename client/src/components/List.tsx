import React, { useEffect } from "react";
import { createList, deleteList, getLists } from "../api/ListsApi";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { ListInterface } from "../types/listTypes";
import { setActiveList, updateLists } from "../slices/lists/listSlice";

const List = () => {
  const lists = useAppSelector((state) => state.listReducer.lists);
  const listId = useAppSelector((state) => state.listReducer.id);
  const dispatch = useAppDispatch();

  const handleGetLists = async () => {
    const lists = await getLists();
    dispatch(updateLists(lists));
  };

  const handleCreateList = async () => {
    await createList();
    handleGetLists();
  };

  const handleDeleteList = async (id: string) => {
    await deleteList(id);
    handleGetLists();
  };

  const updateActiveList = (name: string, id: string) => {
    dispatch(setActiveList({ name, id }));
  };

  useEffect(() => {
    handleGetLists();
  }, []);

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
          onClick={() => handleDeleteList(list.id)}
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
        <button className="text-2xl" onClick={handleCreateList}>
          +
        </button>
      </div>
      <ul className="flex flex-col pt-4">{parsedLists}</ul>
    </div>
  );
};

export { List };
