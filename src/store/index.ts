import Vue from "vue";
import Vuex from "vuex";
import { Date } from "@/types/date";
import { Event } from "@/types/event";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventInfo: new Event("", "", [], "", "", ""),
  },
  mutations: {},
  actions: {},
  modules: {},
});
