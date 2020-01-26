import Vuex from "vuex";
import Vue from "vue";
import persons from "./modules/persons";

// Load Vuex

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    persons
  }
});
