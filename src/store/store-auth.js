import { firebaseAuth } from "@/fb_db_config";

const state = {
  loggedIn: false
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  }
};

const actions = {
  // eslint-disable-next-line
  registerUser({}, payload) {
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log("response: ", res);
      })
      .catch(err => {
        console.log("error message: ", err.message);
      });
  },
  // eslint-disable-next-line
  loginUser({}, payload) {
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log("response: ", res);
      })
      .catch(err => {
        console.log("error message: ", err.message);
      });
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit("setLoggedIn", true);
      } else {
        commit("setLoggedIn", false);
      }
    });
  }
};

const getters = {
  getLoggedIn(state) {
    return state.loggedIn;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
