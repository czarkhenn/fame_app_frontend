import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";


Vue.use(Vuetify);
const vuetifyOptions = {};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: "#app",
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
}).$mount("#app");
