import Vue from "vue";
import Vuex from "vuex";
import { Date } from "@/types/date";
import { Event } from "@/types/event";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventInfo: new Event("", "", [], "", "", ""),
  },
  mutations: {
    InputOptionDate(state, payload) {
      const selectedDateOptionId = state.eventInfo.date.length;
      const selectedOptionDate = new Date(
        selectedDateOptionId + 1,
        payload.Date
      );
      state.eventInfo.date.push(selectedOptionDate);
    },
  },
  actions: {},
  modules: {},
});
