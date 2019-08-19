export const getNav = ({ nav }) => {
  return nav;
};

export const getTasks = ({ tasks }) => {
  return tasks;
};

export const getTotalNumOfTasks = ({ tasks }) => {
  return Object.keys(tasks).length;
};

// eslint-disable-next-line
export const getTotalNumOfCompletedTasks = ({ tasks }) => {
  let cTasks = [];

  Object.keys(tasks).forEach(task => {
    if (tasks[task].completed) cTasks.push(task);
  });
  return cTasks.length;
};

export const getTasksDownloaded = ({ tasksDownloaded }) => {
  return tasksDownloaded;
};
