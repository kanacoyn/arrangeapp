import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";
import { RegisterUser } from "@/types/RegisterUser";
import { Date } from "@/types/date";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventInfo: new Event(0, "", "", [], "", "", ""),
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

    InputOptionDate(state, payload) {
      const selectedDateOptionId = state.eventInfo.date.length;
      const selectedOptionDate = new Date(
        selectedDateOptionId + 1,
        payload.Date
      );
      state.eventInfo.date.push(selectedOptionDate);
    },
  },
  getters: {
    // getEventDateById(state) {
    //   return (id: number) => {
    //     return state.eventInfo.filter(
    //       (date) => date.dateId === Number(date)
    //     )[0];
    //   };
    // },

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
