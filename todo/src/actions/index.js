export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = newTask => {
    console.log('inside actions', newTask)
  return {
    type: ADD_TASK,
    payload: newTask
  };
};

export const toggleTask = id => {
    console.log('inside actions, toggle', id)
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}