import db from "@/fb_db_config.js";

export const fetchTasks = ({ commit, dispatch }) => {
  db.collection("tasks").onSnapshot(function(querySnapshot) {
    var tasks = [];
    querySnapshot.forEach(function(doc) {
      tasks.push(doc.data());
    });
    commit("FETCH_TASKS", tasks);
    dispatch("updateCounter", tasks.length);
  });
};

export const addNewTask = ({ commit }, newTaskTitle) => {
  commit("ADD_NEW_TASK", newTaskTitle);
};

export const removeTask = ({ commit }, currentTask) => {
  commit("REMOVE_TASK", currentTask);
};

export const toggleTaskCompletion = ({ commit }, currentTask) => {
  commit("TOGGLE_TASK_COMPLETION", currentTask);
};

export const updateCounter = ({ commit }, value) => {
  commit("UPDATE_COUNTER", value);
};

export const addToTheCounter = ({ commit }, value) => {
  commit("ADD_TO_THE_COUNTER", value);
};
