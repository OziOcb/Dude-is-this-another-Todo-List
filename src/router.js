import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/list",
      name: "list",
      component: () => import("./views/List.vue")
    },
    {
      path: "/",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("./views/Auth.vue")
    }
  ]
});
