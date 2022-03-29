<template>
  <div class="block">
    <h1 class="heading04">参加者回答画面</h1>
    <div class="container">
      <div class="item">
        <div class="title">{{ eventInfo.eventName }}</div>
        <div class="description">{{ eventInfo.description }}</div>
      </div>
      <div class="select-datelist">
        <div class="answer">
          <div>第1候補</div>
          <div>第2候補</div>
          <div>第3候補</div>
        </div>
        <div class="country-list">
          <div class="country">東京</div>
          <div class="flex">
            <div class="date">
              <div v-for="date of eventInfo.date.date" v-bind:key="date.id">
                {{ date.date }}
              </div>
            </div>
            <div class="date">
              <div v-for="time of eventInfo.date.dateTime" v-bind:key="time.id">
                {{ time.dateTime }}
              </div>
            </div>
          </div>
        </div>
        <div class="global-city">
          <div
            class="country-list"
            v-for="city of eventInfo.cityArray"
            v-bind:key="city.id"
          >
            <div class="country">{{ city.name }}</div>
            <div class="flex">
              <div class="date">
                <div v-for="date of city.date.date" v-bind:key="date.id">
                  {{ date.date }}
                </div>
              </div>
              <div class="date">
                <div v-for="time of city.date.dateTime" v-bind:key="time.id">
                  {{ time.dateTime }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="message" v-show="showMessage">
        <div>第3候補の日時がおすすめです</div>
        <div>第1候補・第2候補は日時が適切ではない可能性があります</div>
      </div>
      <div>
        <div class="item">
          <div>名前</div>
          <div class="input"><input type="text" v-model="name" /></div>
          <div class="error">{{ errorName }}</div>
        </div>
        <div>
          <div class="country">該当する都市を選択してください</div>
          <div class="item">
            <button
              class="btn btn-color1"
              type="button"
              v-on:click="onClickTokyo"
            >
              東京
            </button>
            <button
              class="btn btn-color2"
              type="button"
              v-on:click="onClickCity"
            >
              海外都市
            </button>
          </div>
        </div>
        <div class="item date-answer">
          <div class="flex">
            <div class="country-list" v-show="showTokyo">
              <div class="country">日程候補 (東京)</div>
              <div class="flex">
                <div>
                  <div
                    class="datelist"
                    v-for="date of eventInfo.date.date"
                    v-bind:key="date.id"
                  >
                    <div>{{ date.date }}</div>
                  </div>
                </div>
                <div>
                  <div
                    class="datelist date"
                    v-for="time of eventInfo.date.dateTime"
                    v-bind:key="time.id"
                  >
                    <div>{{ time.dateTime }}</div>
                    <comp-select-box
                      v-bind:date-id="time.id"
                      v-on:select-item="onSelectItem"
                    ></comp-select-box>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex" v-show="showCity">
              <div
                class="country-list"
                v-for="city of eventInfo.cityArray"
                v-bind:key="city.id"
              >
                <div class="country">日程候補 ({{ city.name }})</div>
                <div class="flex">
                  <div>
                    <div
                      class="datelist"
                      v-for="date of city.date.date"
                      v-bind:key="date.id"
                    >
                      <div>{{ date.date }}</div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="datelist date"
                      v-for="time of city.date.dateTime"
                      v-bind:key="time.id"
                    >
                      <div>{{ time.dateTime }}</div>
                      <comp-select-box
                        v-bind:date-id="time.id"
                        v-on:select-item="onSelectItem"
                      ></comp-select-box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="error">{{ errorDate }}</div>
        <div class="item">
          <div>コメント</div>
          <div class="input">
            <input type="text" size="50" v-model="comment" />
          </div>
          <div class="error">{{ errorComment }}</div>
        </div>
        <div>
          <button
            class="register-btn"
            type="button"
            v-on:click="registerAnswer"
          >
            登録する
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RegisterUser } from "@/types/RegisterUser";
import { Event } from "@/types/event";
import { Component, Vue } from "vue-property-decorator";
import CompSelectBox from "@/components/CompSelectBox.vue";
import { EventDate } from "@/types/date";
import { Date2 } from "@/types/Date2";
import { AnswerCount } from "@/types/AnswerCount";
@Component({
  components: {
    CompSelectBox,
  },
})
export default class AnswerFinished extends Vue {
  // 名前
  private name = "";
  // コメント
  private comment = "";
  // 現在表示されているイベント内容
  private eventInfo = new Event(
    0,
    "",
    "",
    new EventDate(0, [], []),
    "",
    "",
    "",
    []
  );
  // 名前のエラー
  private errorName = "";
  // 候補日のエラー
  private errorDate = "";
  // コメントのエラー
  private errorComment = "";
  // エラーチェック
  private errorChecker = true;
  // 回答の配列
  private answerArray = new Array<string>();
  // 日付の配列
  private dateArray = new Array<Date2>();
  // 現在回答済のユーザー
  private currentUserList = new Array<RegisterUser>();
  // 現在の〇のカウント数
  private currentAnswerCount = new Array<number>();
  // 現在回答済のユーザー
  private userList = new Array<RegisterUser>();
  // AnswerCountオブジェクト
  private answerCount = new Array<AnswerCount>();
  // 日本時間の回答フォーム表示・非表示
  private showTokyo = false;
  // 海外時間の回答フォーム表示・非表示
  private showCity = false;
  // 忠告メッセージの表示・非表示
  private showMessage = true;

  created(): void {
    this.eventInfo = this.$store.getters.getEvent;
    this.userList = this.$store.getters.getUserArray;
    // 候補日程をgettersで取得する
    this.dateArray = this.$store.getters.getDateList;
    // 現在の〇のカウント数を配列に入れる
    this.answerCount = this.$store.getters.getAnswerCount;
    for (let i = 0; i < this.answerCount.length; i++) {
      this.currentAnswerCount.push(this.answerCount[i].answerCount);
    }
    // 候補日程の数だけ回答の配列に0（選択してください）を入れる
    for (let i = 1; i <= this.dateArray.length ?? 0; i++) {
      this.answerArray.push("0");
    }
  }

  /**
   * 日時の回答を配列に格納する.
   * @param answer - セレクトボックスのvalue
   */
  onSelectItem(answer: string): void {
    // セレクトボックスが選択される度に予めpushしていた0を削除かつ削除した箇所にanswerを追加する
    this.answerArray.push(answer);
    this.answerArray.splice(0, 1);
    // this.answerArray.splice(i, 1, answer);
  }

  /**
   * 東京の日時フォームを表示させる.
   */
  onClickTokyo(): void {
    this.showTokyo = true;
    this.showCity = false;
  }

  /**
   * 海外都市の日時フォームを表示させる.
   */
  onClickCity(): void {
    this.showTokyo = false;
    this.showCity = true;
  }

  /**
   * 回答内容を登録する.
   */
  registerAnswer(): void {
    // エラー処理
    if (this.name === "") {
      this.errorName = "名前を入力してください";
      this.errorChecker = false;
    }

    for (let answer of this.answerArray) {
      if (answer === "0") {
        this.errorDate = "回答が選択されていません";
        this.errorChecker = false;
      }
    }

    if (this.errorChecker === false) {
      return;
    }

    // IDを発行し、ユーザー情報を登録する
    let userList = this.$store.getters.getUserList;
    let newId = 0;
    if (userList.length > 0) {
      console.log(userList);
      newId = Number(userList[0].userId) + 1;
    }

    // 〇の数を数える
    for (let i = 0; i < this.answerArray.length; i++) {
      if (this.answerArray[i] === "〇") {
        let answer = this.currentAnswerCount[i] + 1;
        this.currentAnswerCount.splice(i, 1, answer);
      }
    }

    // 各日付の〇の合計を登録する
    this.$store.commit("registerCount", {
      answerCount: this.currentAnswerCount,
    });

    // 回答内容を登録する
    this.$store.commit("registerAnswer", {
      registerUser: new RegisterUser(
        newId,
        this.name,
        this.dateArray,
        this.answerArray,
        this.comment
      ),
    });

    // 回答完了ページに遷移する
    this.$router.push("/answerFinished");
  }
}
</script>

<style scoped>
.block {
  width: 100%;
  height: 1000px;
  font-family: "Yu Gothic", "Noto Sans JP", sans-serif;
}

.container {
  width: 1000px;
  height: auto;
  padding: 50px;
  margin-top: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.datelist {
  justify-content: center;
  display: flex;
  margin-bottom: 10px;
}

.item {
  margin-bottom: 20px;
}

.error {
  font-size: 13px;
  color: red;
}
th,
td {
  border: solid 1px;
  padding: 10px;
}

table {
  border-collapse: collapse;
  margin-bottom: 30px;
}

.total {
  background-color: lavenderblush;
}

.date-answer {
  display: flex;
  justify-content: center;
}

.flex {
  display: flex;
}

.country {
  margin-bottom: 10px;
}

.country-list {
  margin-right: 30px;
}

.global-city {
  display: flex;
}

.select-datelist {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.answer {
  font-size: 15px;
  margin-top: 40px;
  margin-right: 10px;
}

.date {
  margin-left: 5px;
}

.btn {
  margin-left: 10px;
  width: 100px;
  height: 30px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-family: "Yu Gothic", "Noto Sans JP", sans-serif;
  transition: all 0.3s ease 0s;
}

.register-btn {
  width: 150px;
  height: 40px;
  margin-left: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-family: "Yu Gothic", "Noto Sans JP", sans-serif;
  transition: all 0.3s ease 0s;
  background-color: orange;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.btn:hover {
  opacity: 0.7;
  cursor: pointer;
}

.register-btn:hover {
  opacity: 0.7;
  cursor: pointer;
}

.btn-color1 {
  background-color: rgb(255, 174, 128);
}

.btn-color2 {
  background-color: rgb(142, 200, 255);
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.description {
  font-size: 15px;
  color: rgb(173, 173, 173);
}

.message {
  border: solid 1px;
  padding: 10px;
  width: 500px;
  font-size: 15px;
  color: rgb(255, 199, 94);
  margin: auto;
  margin-bottom: 20px;
}

/* タイトル用 */
.heading04 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-align: center;
}

.heading04::before,
.heading04::after {
  content: "";
  width: 3px;
  height: 40px;
  background-color: orange;
}

.heading04::before {
  margin-right: 30px;
  transform: rotate(-35deg);
}
.heading04::after {
  margin-left: 30px;
  transform: rotate(35deg);
}
/* h2のタイトル用 */
</style>
