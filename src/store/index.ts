import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";
import { RegisterUser } from "@/types/RegisterUser";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventInfo: new Event("", "", [], "", "", ""),
    registerUser: new RegisterUser(0, "", [], ""),
  },
  mutations: {
    /**
     * 名前を入力して回答を作成する.
     * @param state - ステート
     * @param payload - ペイロード
     */
    addName(state, payload) {
      state.registerUser = payload;
    },
  },
  actions: {},
  getters: {
    /**
     * 候補日程を取得する.
     * @param state - ステート
     * @returns 候補日程
     */
    getDateList(state) {
      return state.eventInfo.date;
    },

    /**
     * イベント内容を取得する.
     * @param state - ステート
     * @returns イベント内容
     */
    getEvent(state) {
      return state.eventInfo;
    },

  },
  modules: {},
});
