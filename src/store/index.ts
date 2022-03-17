import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";
import { RegisterUser } from "@/types/RegisterUser";
import { EventDate } from "@/types/date";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // ダミー情報
    // 1,
    // "送別会",
    // "課長の送別会です",
    // ["2022/4/01"],
    // "taro@taro",
    // "password",
    // "◯×"
    eventInfo: new Event(
      1,
      "送別会",
      "課長の送別会です",
      [],
      "taro@taro",
      "password",
      "◯×"
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

    // InputOptionDate(state, payload) {
    //   // イベント情報からdateをpushする
    //   console.log("dateをpush挑戦");
    //   state.eventInfo.date = payload.eventInfo.date;
    //   console.log("dateをpush成功");
    //   const selectedDateOptionId = state.eventInfo.eventId;
    //   const selectedOptionDate = new Date(
    //     selectedDateOptionId,
    //     payload.Date,
    //     payload.Date
    //   );
    //   console.log("成功");
    //   state.eventInfo.date.push(selectedOptionDate);
    // },

    eventInfo(state, payload) {
      console.log("mutationをpush挑戦");
      state.eventInfo = payload.eventInfo;
      const selectedDateOptionId = state.eventInfo.eventId;
      const selectedOptionDate = new EventDate(
        selectedDateOptionId,
        payload.Date
      );
      state.eventInfo.date.push(selectedOptionDate);
    },

    // registerAnswer(state, payload) {
    //   state.userList.push(payload);

    // },
  },
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
