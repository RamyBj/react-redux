import { v4 as uuidv4 } from "uuid";
import { ADD_TASK, COMPLETE_TASK } from "../constants/action_types";

const initialState = {
  tasks: [{ isDone: false }],
};

function tasksReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          { id: uuidv4(), description: payload.description, isDone: false },
        ],
      };
    case COMPLETE_TASK:
      return {
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, isDone: task.isDone } : task
        ),
      };
    default:
      return state;
  }
}

export default tasksReducer;
