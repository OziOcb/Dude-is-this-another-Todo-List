import { firebaseDb, firebaseAuth } from "@/fb_db_config";

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

// export const addNewTask = ({ commit }, newTaskTitle) => {
//   commit("ADD_NEW_TASK", newTaskTitle);
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

export const FirebaseReadData = ({ commit }) => {
  const userId = firebaseAuth.currentUser.uid;
  const userTasks = firebaseDb.ref("tasks/" + userId);

  // after task has been added
  userTasks.on("child_added", snapshot => {
    const task = snapshot.val();
    const payload = {
      id: snapshot.key,
      task: task
    };
    commit("addTask", payload);
  });

  // after task has been changed
  userTasks.on("child_changed", snapshot => {
    const task = snapshot.val();
    const payload = {
      id: snapshot.key,
      updates: task
    };
    commit("updateTask", payload);
  });

  // after task has been removed
  userTasks.on("child_removed", snapshot => {
    let taskId = snapshot.key;
    commit("deleteTask", taskId);
  });
};
