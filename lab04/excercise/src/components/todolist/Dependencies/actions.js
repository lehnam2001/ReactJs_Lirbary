import { SET_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./constants";

const setTodo = (payload, editing) => {
  return {
    type: SET_TODO,
    payload
  };
};

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};

const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  };
};

const updateTodo = (payload, index) => {
  return {
    type: UPDATE_TODO,
    payload
  };
};

export { setTodo, addTodo, deleteTodo, updateTodo };
