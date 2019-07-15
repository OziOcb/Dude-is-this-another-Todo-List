import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nav: [
      { icon: "mdi-format-list-checks", title: "List", route: "/" },
      {
        icon: "mdi-comment-question-outline",
        title: "About the Project",
        route: "/about"
      }
    ],
    tasks: [
      {
        completed: false,
        id: 1,
        title: "quis ut nam facilis et officia qui",
        userId: 1
      },
      {
        completed: true,
        id: 2,
        title: "et officia qui",
        userId: 1
      },
      {
        completed: true,
        id: 3,
        title: "elo elo elo",
        userId: 1
      }
    ]
  },
  getters,
  mutations,
  actions
});
