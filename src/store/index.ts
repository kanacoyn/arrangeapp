import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";
import { UserList } from "@/types/UserList";
import { RegisterUser } from "@/types/RegisterUser";
import { EventDate } from "@/types/date";
import { City } from "@/types/City";
import { Date2 } from "@/types/Date2";
import { Time } from "@/types/Time";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // eventInfo: new Event(0, "", "", [], "", "", ""), ←ここ修正する必要あり
    eventInfo: new Event(
      1,
      "飲み会",
      "池袋駅周辺で行います",
      new EventDate(
        1,
        [
          new Date2(1, "2022/3/16"),
          new Date2(2, "2022/3/20"),
          new Date2(3, "2022/3/22"),
        ],
        [new Time(1, "18:00"), new Time(2, "19:00"), new Time(3, "20:00")]
      ),
      "abc@gmail.com",
      "12345",
      "",
      new City(
        1,
        ["ニューヨーク", "ロンドン"],
        [
          new EventDate(
            1,
            [
              new Date2(4, "2022/3/15"),
              new Date2(5, "2022/3/19"),
              new Date2(6, "2022/3/20"),
            ],
            [new Time(3, "14:00"), new Time(4, "15:00"), new Time(5, "16:00")]
          ),
          new EventDate(
            2,
            [
              new Date2(4, "2022/3/15"),
              new Date2(5, "2022/3/19"),
              new Date2(6, "2022/3/20"),
            ],
            [new Time(3, "14:00"), new Time(4, "15:00"), new Time(5, "16:00")]
          ),
        ]
      )
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
      return state.eventInfo.date.date;
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
