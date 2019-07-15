export const TOGGLE_TASK_COMPLETION = (state, currentTask) => {
  state.tasks.filter(task =>
    task.id === currentTask.id ? (task.completed = !task.completed) : false
  );
};

export const REMOVE_TASK = (state, currentTask) => {
  state.tasks = state.tasks.filter(task => task.id !== currentTask.id);
};
