import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

import auth from "./store-auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  },
  state: {
    nav: [
      {
        name: "list",
        icon: "mdi-format-list-checks",
        title: "List",
        route: "/"
      },
      {
        name: "about",
        icon: "mdi-comment-question-outline",
        title: "About the Project",
        route: "/about"
      }
    ],
    tasks: [],
    counter: 0
  },
  getters,
  mutations,
  actions
});
