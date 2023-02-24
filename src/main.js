import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./plugins/i18n";

import "@/assets/css/style.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

import CountryFlag from "vue-country-flag";
Vue.component("country-flag", CountryFlag);

import { Icon } from "@iconify/vue2";
Vue.component("i-icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  i18n,
}).$mount("#app");
