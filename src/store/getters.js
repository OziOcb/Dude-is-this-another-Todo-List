export const getNav = state => {
  return state.nav;
};

export const getTasks = state => {
  return state.tasks;
};

export const getTotalNumOfTasks = state => {
  return state.tasks.length;
};

export const getTotalNumOfCompletedTasks = state => {
  return state.tasks.filter(task => task.completed).length;
};
