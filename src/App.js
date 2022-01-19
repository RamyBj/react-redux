import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Formtodo from "./Component/Formtodo";
import TaskList from "./Component/TaskList";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Formtodo />
        <TaskList/>

      </div>
    </div>
  );
}

export default App;
