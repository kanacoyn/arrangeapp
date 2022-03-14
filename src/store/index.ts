import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: new Event("", "", [], "", "", ""),
  },
  mutations: {},
  actions: {},
  getters:{
    /**
     * 候補日程を取得する.
     * @param state - ステート
     * @returns 候補日程
     */
    getDateList(state){
      return state.event.date;
    }
  },
  modules: {},
});
