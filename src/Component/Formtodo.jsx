import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/action";
import { Button } from "bootstrap";
const FormTodo = () => {
  const [newTask, setnewTask] = useState("");
  const handlechange = (e) => {
    setnewTask(e.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        description: newTask,
      })
    );

    setnewTask("");
  };
  return (
    <form className="form">
      <input
        type="text"
        placeholder="enter your to do ..."
        className="input-add"
        onChange={handlechange}
        value={newTask}
      />

      <button
        type="submit"
        className="btn-add"
        onClick={handleSubmit}
        variant="primary"
        size="lg"
      >
        ADD
      </button>
    </form>
  );
};

export default FormTodo;
