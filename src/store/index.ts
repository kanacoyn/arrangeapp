import Vue from "vue";
import Vuex from "vuex";
import { Event } from "@/types/event";
import { UserList } from "@/types/UserList";
import { RegisterUser } from "@/types/RegisterUser";
import { EventDate } from "@/types/date";
import { AnswerCount } from "@/types/AnswerCount";
import { City } from "@/types/City";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventInfo: new Event(0, "", "", new EventDate(0, [], []), "", "", "", []),
    // eventInfo: new Event(
    //   1,
    //   "定例MTG",
    //   "1～1時間半くらいを予定しています",
    //   new EventDate(
    //     1,
    //     [
    //       new Date2(1, "2022/3/15"),
    //       new Date2(2, "2022/3/20"),
    //       new Date2(3, "2022/3/27"),
    //     ],
    //     [new Time(1, "9:00"), new Time(2, "13:00"), new Time(3, "22:00")]
    //   ),
    //   "abc@gmail.com",
    //   "12345",
    //   "",
    //   [
    //     new City(
    //       1,
    //       "ニューヨーク",
    //       new EventDate(
    //         1,
    //         [
    //           new Date2(4, "2022/3/14"),
    //           new Date2(5, "2022/3/19"),
    //           new Date2(6, "2022/3/20"),
    //         ],
    //         [new Time(3, "19:00"), new Time(4, "23:00"), new Time(5, "8:00")]
    //       )
    //     ),
    //     new City(
    //       1,
    //       "ロンドン",
    //       new EventDate(
    //         2,
    //         [
    //           new Date2(4, "2022/3/15"),
    //           new Date2(5, "2022/3/20"),
    //           new Date2(6, "2022/3/27"),
    //         ],
    //         [new Time(3, "0:00"), new Time(4, "4:00"), new Time(5, "13:00")]
    //       )
    //     ),
    //   ]
    // ),

    registerUser: new RegisterUser(0, "", [], [], ""),

    userList: new UserList(
      [],
      [new AnswerCount(0, 0), new AnswerCount(0, 0), new AnswerCount(0, 0)]
    ),
  },
  actions: {},

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
      console.log(state.eventInfo.cityArray);
    },
    // },
    /**
     * カウント数を格納する.
     * @param state - ステート
     * @param payload カウント数
     */
    registerCount(state, payload) {
      for (let i = 0; i < payload.answerCount.length; i++) {
        state.userList.answerCount[i].answerCount = payload.answerCount[i];
      }
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

    /**
     * 選択された都市を取得する.
     * @param state - ステート
     * @returns 選択された都市
     */
    getCityArray(state) {
      const cityArray = new Array<City>();
      for (const city of state.eventInfo.cityArray) {
        if (city.name !== "") {
          cityArray.push(city);
        }
      }
      return cityArray;
    },
  },
  modules: {},
});
