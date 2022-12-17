import React from "react";
import { ActiveList } from "./components/ActiveList";
import { List } from "./components/List";
import { SignupModal } from "./components/SignupModal";
import { Tasks } from "./components/Tasks";

const App = () => {
  return (
    <div className="flex flex-block m-4 h-[85vh] border-2 border-black rounded-lg">
      <List />
      <div className="w-3/4 h-full">
        <div className="flex justify-between">
          <ActiveList />
          <SignupModal />
        </div>
        <Tasks />
      </div>
    </div>
  );
};

export default App;
