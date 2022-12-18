import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  setListView,
  updateLists,
  setActiveList,
} from "../slices/lists/listSlice";
import { getLists, updateList } from "../api/ListsApi";
import { ListInterface } from "../types/listTypes";

const ActiveList = () => {
  const listName = useAppSelector((state) => state.listReducer.name);
  const lists = useAppSelector((state) => state.listReducer.lists);
  const listId = useAppSelector((state) => state.listReducer.id);
  const dispatch = useAppDispatch();

  const checkIfActiveListStillExists = () => {
    if (lists.length > 0) {
      const filteredData = lists.filter(
        (entry: ListInterface) => entry.id === listId
      );
      if (filteredData.length === 0) {
        dispatch(
          setActiveList({
            id: lists[0].id,
            name: lists[0].name,
          })
        );
      }
    } else {
      dispatch(
        setActiveList({
          id: "",
          name: "No List Selected",
        })
      );
    }
  };

  useEffect(() => {
    checkIfActiveListStillExists();
  }, [lists]);

  const editList = (value: string) => {
    dispatch(setListView(String(value)));
  };

  const onEnter = (e: any) => {
    if (e.key === "Enter" || e.key === "Escape") {
      e.target.blur();
    }
  };

  const handleUpdateList = async (name: string, id: string) => {
    if (name.trim() !== "") {
      await updateList(name, id);
    }
    dispatch(updateLists(await getLists()));
  };

  return (
    <div>
      <input
        className="font-bold text-2xl p-4 w-full"
        type="text"
        value={listName}
        onChange={(e) => editList(e.target.value)}
        onKeyDown={onEnter}
        onBlur={(e) => handleUpdateList(e.target.value, listId)}
      />
    </div>
  );
};

export { ActiveList };
