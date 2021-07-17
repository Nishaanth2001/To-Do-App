import { ADD_TASK, DELETE_TASK } from '../actions/types';

const initialState = {
  todoList: []
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todoList: state.todoList.concat({
          key: Math.random(),
          name: action.data
        })
      };
    case DELETE_TASK:
      return {
        ...state,
        todoList: state.todoList.filter((item) =>
          item.key !== action.key)
      };
    default:
      return state;
  }
}

export default taskReducer;