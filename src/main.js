import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.use(Vuelidate);
Vue.config.productionTip = false;

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

router.beforeEach((to, from, next) => {
  if (!JSON.parse(localStorage.loggedIn) && to.path === "/list") {
    next("/");
  } else {
    next();
  }
});

console.log(!JSON.parse(localStorage.loggedIn));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
