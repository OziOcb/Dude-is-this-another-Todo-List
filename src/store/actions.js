import axios from "axios";

export const updateValue = ({ commit }, payload) => {
  commit("updateValue", payload);
};

export const toggleTaskCompletion = ({ commit }, currentTask) => {
  commit("TOGGLE_TASK_COMPLETION", currentTask);
};

export const removeTask = ({ commit }, currentTask) => {
  commit("REMOVE_TASK", currentTask);
};

export const addNewTask = ({ commit }, newTaskTitle) => {
  commit("ADD_NEW_TASK", newTaskTitle);
};

export const fetchTasks = ({ commit, dispatch }) => {
  axios
    .get("/todos?userId=1")
    .then(res => {
      commit("FETCH_TASKS", res.data);
      dispatch("updateCounter", res.data.length);
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateCounter = ({ commit }, value) => {
  commit("UPDATE_COUNTER", value);
};
