import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";
import { UserList } from "@/types/UserList";
import { RegisterUser } from "@/types/RegisterUser";
import { EventDate } from "@/types/date";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // eventInfo: new Event(0, "", "", [], "", "", ""),
    eventInfo: new Event(
      1,
      "飲み会",
      "池袋駅周辺で行います",
      [
        new EventDate(1, "2022/3/16","19:00"),
        new EventDate(2, "2022/3/20","20:00"),
        new EventDate(3, "2022/3/22","18:00"),
      ],
      "abc@gmail.com",
      "12345",
      ""
    ),

    registerUser: new RegisterUser(0, "", [], [], ""),

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
    selectAnswer(state, payload) {
      state.eventInfo.date.push(payload.date);
    },

    eventInfo(state, payload) {
      state.eventInfo = payload.event;
      // const selectedOptionDate = new EventDate(
      //   payload.dateId + 1,
      //   payload.date
      // );
      // state.eventInfo.push(payload.eventInfo);
    },
    // },
    /**
     * カウント数を格納する.
     * @param state - ステート
     * @param payload カウント数
     */
    registerCount(state, payload) {
      state.userList.answerCount.push(payload.answerCount);
      console.log(state.userList.answerCount);
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
     * ユーザーの配列を取得する.
     * @param state - ステート
     * @returns ユーザーの配列
     */
    getUserArray(state) {
      return state.userList.userList;
    },

    /**
     * 〇のカウント数を取得する.
     * @param state - ステート
     * @returns 〇のカウント数
     */
    getAnswerCount(state) {
      console.log(state.userList.answerCount);
      return state.userList.answerCount;
    },
    /**
     * idから詳細ページを取得する
     * @param state - ステート
     * @returns 作品情報
     */
    getSearchUser(state) {
      return (userId: number) => {
        return state.userList.userList.filter(
          (user) => user.userId === userId
        )[0];
      };
    },
  },
  modules: {},
});
