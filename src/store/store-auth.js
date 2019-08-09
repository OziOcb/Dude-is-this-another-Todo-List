import { firebaseAuth } from "@/fb_db_config";
import router from "@/router";

const state = {
  loggedIn: false,
  submitStatus: ""
};

const getters = {
  getLoggedIn(state) {
    return state.loggedIn;
  },
  getSubmitStatus(state) {
    return state.submitStatus;
  }
};

const actions = {
  // eslint-disable-next-line
  registerUser({ dispatch }, payload) {
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        return dispatch("handleSubmitStatusChange", "OK");
      })
      .then(() => {
        router.push({ name: "list" });
      })
      .catch(err => {
        console.log("error message: ", err.message);
        dispatch("handleSubmitStatusChange", "BAD_REGISTER");
      });
  },
  // eslint-disable-next-line
  loginUser({ dispatch }, payload) {
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        return dispatch("handleSubmitStatusChange", "OK");
      })
      .then(() => {
        router.push({ name: "list" });
      })
      .catch(err => {
        console.log("error message: ", err.message);
        dispatch("handleSubmitStatusChange", "BAD_LOGIN");
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
    router.replace({ name: "auth" });
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit("setLoggedIn", true);
        localStorage.loggedIn = true;
      } else {
        commit("setLoggedIn", false);
        localStorage.loggedIn = false;
      }
    });
  },
  handleSubmitStatusChange({ commit }, payload) {
    commit("setSubmitStatus", payload);
  }
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  },
  setSubmitStatus(state, payload) {
    state.submitStatus = payload;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
