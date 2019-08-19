import Vue from "vue";

export const ADD_TASK = (state, payload) => {
  Vue.set(state.tasks, payload.id, payload.task);
};

export const UPDATE_TASK = (state, payload) => {
  Object.assign(state.tasks[payload.id], payload.updates);
};

export const DELETE_TASK = (state, id) => {
  Vue.delete(state.tasks, id);
};

export const CLEAR_TASKS = state => {
  state.tasks = {};
};

export const TASKS_DOWNLOADED = (state, value) => {
  state.tasksDownloaded = value;
};
