import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";
import { RegisterUser } from "@/types/RegisterUser";
import { Date } from "@/types/date";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // eventInfo: new Event(0, "", "", [], "", "", ""),
    eventInfo: new Event(
      1,
      "飲み会",
      "池袋駅周辺で行います",
      [
        new Date(1, "2022/3/16", ""),
        new Date(2, "2022/3/20", ""),
        new Date(3, "2022/3/22", ""),
      ],
      "abc@gmail.com",
      "12345",
      ""
    ),
    registerUser: new RegisterUser(0, "", [], ""),
    userList: new Array<RegisterUser>(),
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

    /**
     * 回答者情報をステートに格納する.
     * @param state - ステート
     * @param payload 回答者情報
     */
    registerAnswer(state, payload) {
      state.userList.push(payload.registerUser);
    },

    selectAnswer(state, payload) {
      state.eventInfo.date.push(payload.date);
    },

    // InputOptionDate(state, payload) {
    //   const selectedDateOptionId = state.eventInfo.date.length;
    //   const selectedOptionDate = new Date(
    //     selectedDateOptionId + 1,
    //     payload.Date
    //   );
    //   state.eventInfo.date.push(selectedOptionDate);
    // },
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

    /**
     * 回答済みのユーザーを取得する.
     * @param state - ステート
     * @returns 回答済みユーザー
     */
    getUserList(state) {
      return state.userList;
    },
  },
  modules: {},
});
