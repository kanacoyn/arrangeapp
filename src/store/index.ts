import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";
import { RegisterUser } from "@/types/RegisterUser";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: new Event("", "", [], "", "", ""),
    // event: new Event("飲み会", "池袋駅周辺で行います", [], "aiueo@gmail.com", "aiueo", ""),
    registerUser: new RegisterUser(0, "", [], "", ""),
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
      return state.event.date;
    },

    /**
     * イベント内容を取得する.
     * @param state - ステート
     * @returns イベント内容
     */
    getEvent(state) {
      return state.event;
    },
  },
  modules: {},
});
