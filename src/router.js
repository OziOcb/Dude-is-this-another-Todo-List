import Vue from "vue";
import Router from "vue-router";
import About from "@/views/About.vue";

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
      component: About
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("./views/Auth.vue")
    }
  ]
});
