import { firebaseAuth } from "@/fb_db_config";
import router from "@/router";

const state = {
  loggedIn: false,
  submitMessage: ""
};

const getters = {
  getLoggedIn({ loggedIn }) {
    return loggedIn;
  },
  getSubmitMessage({ submitMessage }) {
    return submitMessage;
  }
};

const actions = {
  // eslint-disable-next-line
  registerUser({ dispatch }, payload) {
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        return dispatch("handleSubmitMessageChange", "");
      })
      .then(() => {
        router.push({ name: "list" });
      })
      .catch(err => {
        dispatch("handleSubmitMessageChange", err.message);
      });
  },
  // eslint-disable-next-line
  loginUser({ dispatch }, payload) {
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        return dispatch("handleSubmitMessageChange", "");
      })
      .then(() => {
        router.push({ name: "list" });
      })
      .catch(err => {
        dispatch("handleSubmitMessageChange", err.message);
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
    router.replace({ name: "auth" });
  },
  handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit("setLoggedIn", true);
        localStorage.loggedIn = true;
        dispatch("firebaseReadData", null, { root: true });
      } else {
        commit("CLEAR_TASKS", null, { root: true });
        commit("TASKS_DOWNLOADED", false, { root: true });
        commit("setLoggedIn", false);
        localStorage.loggedIn = false;
      }
    });
  },
  handleSubmitMessageChange({ commit }, payload) {
    commit("setSubmitMessage", payload);
  }
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  },
  setSubmitMessage(state, payload) {
    state.submitMessage = payload;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
