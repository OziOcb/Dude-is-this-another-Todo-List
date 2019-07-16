export const TOGGLE_TASK_COMPLETION = (state, currentTask) => {
  state.tasks.filter(task =>
    task.id === currentTask.id ? (task.completed = !task.completed) : false
  );
};

export const REMOVE_TASK = (state, currentTask) => {
  state.tasks = state.tasks.filter(task => task.id !== currentTask.id);
};

export const ADD_NEW_TASK = (state, newTaskTitle) => {
  state.tasks.push({
    id: state.counter + 1,
    completed: false,
    title: newTaskTitle
  });
  state.counter++;
};

export const FETCH_TASKS = (state, tasks) => {
  state.tasks = tasks;
};

export const UPDATE_COUNTER = (state, value) => {
  state.counter = value;
};
