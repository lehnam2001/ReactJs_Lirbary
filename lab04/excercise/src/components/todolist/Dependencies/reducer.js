import { SET_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./constants";

const initState = {
  todoInput: "",
  todos: ['Go shopping', 'buy flowers']
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todoInput: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      const newTodosDelete = [...state.todos];
      newTodosDelete.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodosDelete
      };
    case UPDATE_TODO:
      const newTodosUpdate = [...state.todos];
      newTodosUpdate[action.payload.index] = action.payload.value;
      return {
        ...state,
        todos: newTodosUpdate
      };
    default:
      throw new Error("Invalid action");
  }
};

export { initState };
export default reducer;
