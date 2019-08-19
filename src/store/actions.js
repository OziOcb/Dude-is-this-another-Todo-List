import { firebaseDb, firebaseAuth } from "@/fb_db_config";
import uniqid from "uniqid";

// Listens for any changes made to the FirabeseDB
export const firebaseReadData = ({ commit }) => {
  const userId = firebaseAuth.currentUser.uid;
  const userTasks = firebaseDb.ref("tasks/" + userId);

  userTasks.once("value", () => {
    commit("TASKS_DOWNLOADED", true);
  });

  // listens for task to be added
  userTasks.on("child_added", snapshot => {
    const task = snapshot.val();
    const payload = {
      id: snapshot.key,
      task: task
    };
    commit("ADD_TASK", payload);
  });

  // listens for task to be changed
  userTasks.on("child_changed", snapshot => {
    const task = snapshot.val();
    const payload = {
      id: snapshot.key,
      updates: task
    };
    commit("UPDATE_TASK", payload);
  });

  // listens for task to be removed
  userTasks.on("child_removed", snapshot => {
    let taskId = snapshot.key;
    commit("DELETE_TASK", taskId);
  });
};

// Adds task to the FirabeseDB
// eslint-disable-next-line
export const firebaseAddTask = ({}, newTaskTitle) => {
  const userId = firebaseAuth.currentUser.uid;
  const taskId = uniqid();
  const payload = {
    completed: false,
    title: newTaskTitle
  };

  const taskRef = firebaseDb.ref("tasks/" + userId + "/" + taskId);
  taskRef.set(payload);
};

// Update task at the FirabeseDB
// toggle between 'completed' and 'uncompleted'
export const firebaseUpdateTask = ({ state }, currentTask) => {
  const userId = firebaseAuth.currentUser.uid;
  const payload = {
    completed: !state.tasks[currentTask.id].completed
  };

  const taskRef = firebaseDb.ref("tasks/" + userId + "/" + currentTask.id);
  taskRef.update(payload);
};

// Remove task at the FirabeseDB
// eslint-disable-next-line
export const firebaseRemoveTask = ({}, currentTaskId) => {
  const userId = firebaseAuth.currentUser.uid;
  const taskRef = firebaseDb.ref("tasks/" + userId + "/" + currentTaskId);
  taskRef.remove();
};
