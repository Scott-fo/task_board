import React from "react";
import { ActiveList } from "./components/ActiveList";
import { List } from "./components/List";
import { Tasks } from "./components/Tasks";

const App = () => {
  return (
    <div className="flex flex-block m-4 h-screen border-2 border-black rounded-lg">
      <List />
      <div className="w-3/4">
        <ActiveList />
        <Tasks />
      </div>
    </div>
  );
};

export default App;
