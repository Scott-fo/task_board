import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListInterface, ListState } from "../../types/listTypes";

const initialState: ListState = {
  id: "",
  name: "No List Selected",
  lists: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setListView: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateLists: (
      state,
      action: PayloadAction<{ id: string; name: string }[]>
    ) => {
      state.lists = action.payload;
    },
    setActiveList: (state, action: PayloadAction<ListInterface>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { setListView, updateLists, setActiveList } = listSlice.actions;
export default listSlice.reducer;
