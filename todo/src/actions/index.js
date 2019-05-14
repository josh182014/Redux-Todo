export const ADD_TASK = 'ADD_TASK';

export const addTask = newTask => {
    console.log('inside actions', newTask)
  return {
    type: ADD_TASK,
    payload: newTask
  };
};