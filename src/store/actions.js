export const updateValue = ({ commit }, payload) => {
  commit("updateValue", payload);
};

export const toggleTaskCompletion = ({ commit }, currentTask) => {
  commit("TOGGLE_TASK_COMPLETION", currentTask);
};

export const removeTask = ({ commit }, currentTask) => {
  commit("REMOVE_TASK", currentTask);
};
