import Vue from "vue";
import Vuex from "vuex";

// Modules
import home from "@/modules/home/store";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    home,
  },
});
