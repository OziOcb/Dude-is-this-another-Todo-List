import { firebaseAuth } from "@/fb_db_config";

const state = {};

const mutations = {};

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
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
