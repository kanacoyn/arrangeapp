import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";
import { EventDate } from "@/types/date";
import { UserList } from "@/types/UserList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // eventInfo: new Event(0, "", "", [], "", "", ""),
    eventInfo: new Event(
      1,
      "飲み会",
      "池袋駅周辺で行います",
      [
        new EventDate(1, "2022/3/16"),
        new EventDate(2, "2022/3/20"),
        new EventDate(3, "2022/3/22"),
      ],
      "abc@gmail.com",
      "12345",
      ""
    ),
    userList: new UserList([], []),
  },
  mutations: {
    /**
     * 回答者情報をステートに格納する.
     * @param state - ステート
     * @param payload 回答者情報
     */
    registerAnswer(state, payload) {
      state.userList.userList.push(payload.registerUser);
    },
    // InputOptionDate(state, payload) {
    //   const selectedDateOptionId = state.eventInfo.eventId;
    //   const selectedOptionDate = new EventDate(
    //     selectedDateOptionId,
    //     payload.Date
    //   );
    //   state.eventInfo.date.push(selectedOptionDate);
    //   console.log(payload.Date);
    // },
    registerCount(state, payload) {
      state.userList.answerCount.push(payload.answerCount);
    },
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

    /**
     * 〇のカウント数を取得する.
     * @param state - ステート
     * @returns 〇のカウント数
     */
    getAnswerCount(state) {
      return state.userList.answerCount;
    },
  },
  modules: {},
});
