import React, { useEffect } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  setListView,
  updateLists,
  setActiveList,
} from "../features/lists/listSlice";

interface ListInterface {
  id: string;
  name: string;
}

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

  const getLists = async () => {
    const { data } = await axios.get("http://localhost:8000/lists");
    return data.lists;
  };

  const updateList = async (name: string, id: string) => {
    if (name.trim() !== "") {
      await axios.post("http://localhost:8000/lists/update", {
        id,
        name,
      });
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
        onBlur={(e) => updateList(e.target.value, listId)}
      />
    </div>
  );
};

export { ActiveList };
