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
    ]
  },
  getters,
  mutations,
  actions
});
