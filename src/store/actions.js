import { firebaseDb, firebaseAuth } from "@/fb_db_config";
import uniqid from "uniqid";

// export const fetchTasks = ({ commit, dispatch }) => {
//   db.collection("tasks").onSnapshot(querySnapshot => {
//     let tasks = [];
//     querySnapshot.forEach(doc => {
//       tasks.push(doc.data());
//     });
//     commit("FETCH_TASKS", tasks);
//     dispatch("updateCounter", tasks.length);
//   });
// };

// export const removeTask = ({ commit }, currentTask) => {
//   commit("REMOVE_TASK", currentTask);
// };

// export const toggleTaskCompletion = ({ commit }, currentTask) => {
//   commit("TOGGLE_TASK_COMPLETION", currentTask);
// };

// export const updateCounter = ({ commit }, value) => {
//   commit("UPDATE_COUNTER", value);
// };

// export const addToTheCounter = ({ commit }, value) => {
//   commit("ADD_TO_THE_COUNTER", value);
// };

// Listens for any changes made to the FirabeseDB
export const firebaseReadData = ({ commit }) => {
  const userId = firebaseAuth.currentUser.uid;
  const userTasks = firebaseDb.ref("tasks/" + userId);

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
    id: taskId,
    task: {
      completed: false,
      title: newTaskTitle
    }
  };

  const taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
  taskRef.set(payload.task);
};

// Update task at the FirabeseDB
export const firebaseUpdateTask = ({ state }, currentTask) => {
  const userId = firebaseAuth.currentUser.uid;
  const payload = {
    id: currentTask.id,
    task: {
      completed: !state.tasks[currentTask.id].completed
    }
  };

  const taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
  taskRef.update(payload.task);
};
