/* eslint-disable prettier/prettier */
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const fetchTasks = () => async (dispatch) => {
  // Make an Axios request to your backend server to fetch tasks.
  // Handle the response and dispatch 'ADD_TASK' actions to update the state.
};
