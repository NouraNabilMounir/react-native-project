/* eslint-disable prettier/prettier */
// reducers/taskReducer.js

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    // Handle other task-related actions here
    default:
      return state;
  }
};

export default taskReducer;
