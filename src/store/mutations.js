// import db from "@/fb_db_config.js";
import Vue from "vue";

// export const FETCH_TASKS = (state, tasks) => {
//   state.tasks = tasks;
// };

// export const ADD_NEW_TASK = (state, newTaskTitle) => {
//   const date = Date.now();

//   db.collection("tasks")
//     .doc(`${date}`)
//     .set({
//       id: date,
//       completed: false,
//       title: newTaskTitle
//     })
//     .then(() => {
//       console.log("Task successfully added");
//     })
//     .catch(err => {
//       console.log("Error adding new task: ", err);
//     });
// };

// export const REMOVE_TASK = (state, currentTask) => {
//   db.collection("tasks")
//     .doc(`${currentTask.id}`)
//     .delete()
//     .then(() => {
//       console.log("Task successfully deleted");
//     })
//     .catch(err => {
//       console.log("Error removing task", err);
//     });
// };

// export const TOGGLE_TASK_COMPLETION = (state, currentTask) => {
//   db.collection("tasks")
//     .doc(`${currentTask.id}`)
//     .update({
//       completed: !currentTask.completed
//     })
//     .then(() => {
//       console.log("Task toggled");
//     })
//     .catch(err => {
//       console.log("Error toggling task", err);
//     });
// };

// export const UPDATE_COUNTER = (state, value) => {
//   state.counter = value;
// };

// export const ADD_TO_THE_COUNTER = (state, value) => {
//   state.counter += value;
// };

export const addTask = (state, payload) => {
  Vue.set(state.tasks, payload.id, payload.task);
};

export const updateTask = (state, payload) => {
  Object.assign(state.tasks[payload.id], payload.updates);
};

export const deleteTask = (state, id) => {
  Vue.delete(state.tasks, id);
};
