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
      .then(res => {
        console.log("response: ", res);
        dispatch("handleSubmitStatusChange", "OK");
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
      .then(res => {
        console.log("response: ", res);
        dispatch("handleSubmitStatusChange", "OK");
      })
      .catch(err => {
        console.log("error message: ", err.message);
        dispatch("handleSubmitStatusChange", "BAD_LOGIN");
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit("setLoggedIn", true);
        router.push("/");
      } else {
        commit("setLoggedIn", false);
        router.replace("/auth");
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
