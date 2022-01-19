import react from "react";
import { Button } from "react-bootstrap";
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { completeTask } from "../Redux/action";

const Task = ({ taskData, index }) => {
  const dispatch = useDispatch();
  const handeleComplete = () => {
    dispatch(completeTask
      ({
        id: taskData.id,
      })
    );
  };
  return (
    <div>
      <div className="todo-feild">
        <div>
          <h2>{` ${index + 1}/- ${taskData.description}`} </h2>
        </div>

        <Button variant="success" className="btn" onClick={handeleComplete}>
          iS Done
        </Button>

        <Button variant="danger" className="btn">
          Delete
        </Button>
        <EditTask />
      </div>
    </div>
  );
};

export default Task;
