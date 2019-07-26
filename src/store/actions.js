import axios from "axios";
import db from "@/fb_db_config.js";

export const updateValue = ({ commit }, payload) => {
  commit("updateValue", payload);
};

export const toggleTaskCompletion = ({ commit }, currentTask) => {
  commit("TOGGLE_TASK_COMPLETION", currentTask);
};

export const removeTask = ({ commit }, currentTask) => {
  commit("REMOVE_TASK", currentTask);
};

export const addNewTask = ({ commit, state }, newTaskTitle) => {
  db.collection("tasks")
    .add({
      id: state.counter + 1,
      completed: false,
      title: newTaskTitle
    })
    .then(() => {
      console.log("poszlo!");
    });
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
