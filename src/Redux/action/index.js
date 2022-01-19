import { ADD_TASK, COMPLETE_TASK } from "../constants/action_types";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload:payload
  };
};
export const completeTask = (payload) => {
  return {
    type: COMPLETE_TASK,
    payload:payload
  };
};
