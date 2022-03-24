<template>
  <div class="container">
    <div>
      <table align="center">
        <tr>
          <th></th>
          <th>第1候補</th>
          <th>第2候補</th>
          <th>第3候補</th>
        </tr>
        <tr class="total">
          <td>合計</td>
          <td v-for="count of currentAnswerCount" v-bind:key="count.id">
            {{ count }}
          </td>
        </tr>
        <tr v-for="user of userList" v-bind:key="user.userId">
          <td>
            <router-link v-bind:to="'/userAnswer/' + user.userId">{{
              user.name
            }}</router-link>
          </td>
          <td v-for="answer of user.registerAnswer" v-bind:key="answer.id">
            {{ answer }}
          </td>
        </tr>
      </table>
    </div>
    <div v-show="commentShow">
      <div>コメント</div>
      <div v-for="user of userList" v-bind:key="user.userId">
        <div>{{ user.name }}</div>
        <div>{{ user.comment }}</div>
        <hr />
      </div>
    </div>
    <div v-show="buttonShow">
      <button type="button" v-on:click="onClick">続けて入力する</button>
    </div>
    <div v-show="showForm">
      <div class="item">
        <div>名前</div>
        <div class="input"><input type="text" v-model="name" /></div>
        <div class="error">{{ errorName }}</div>
      </div>
      <div class="item date-answer">
        <div class="date">
          <div>日程候補(日本)</div>
          <div
            class="datelist"
            v-for="date of eventInfo.date.date"
            v-bind:key="date.id"
          >
            <div>{{ date.date }}</div>
            <comp-select-box
              v-bind:date-id="date.id"
              v-on:select-item="onSelectItem"
            ></comp-select-box>
          </div>
          <div class="error">{{ errorDate }}</div>
        </div>
      </div>
      <div class="item">
        <div>コメント</div>
        <div class="input">
          <input type="text" size="50" v-model="comment" />
        </div>
        <div class="error">{{ errorComment }}</div>
      </div>
      <div>
        <button type="button" v-on:click="registerAnswer">登録する</button>
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
  // コメントの配列
  private commentArray = new Array<string>();
  // コメントの表示・非表示
  private commentShow = false;
  // 現在回答済のユーザー
  private userList = new Array<RegisterUser>();
  // フォームの表示・非表示
  private showForm = true;
  // ボタンの表示・非表示
  private buttonShow = false;

  created(): void {
    this.eventInfo = this.$store.getters.getEvent;
    this.userList = this.$store.getters.getUserArray;
    // 候補日程をgettersで取得する
    this.dateArray = this.$store.getters.getDateList;
    // 候補日程の数だけ回答の配列に0（選択してください）を入れる
    for (let i = 1; i <= this.$store.getters.getDateList.length ?? 0; i++) {
      this.answerArray.push("0");
    }
    // 候補日程の数だけ〇のカウント数の配列に0を入れる
    for (let i = 1; i <= this.$store.getters.getDateList.length ?? 0; i++) {
      this.currentAnswerCount.push(0);
    }
  }

  /**
   * 回答を配列に格納する.
   * @param answer - セレクトボックスのvalue
   */
  onSelectItem(answer: string): void {
    // セレクトボックスが選択される度に予めpushしていた0を削除かつ削除した箇所にanswerを追加する
    this.answerArray.push(answer);
    this.answerArray.splice(0, 1);
    // this.answerArray.splice(i, 1, answer);
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

    // コメントを表示・非表示させる処理
    for (let user of this.userList) {
      if (user.comment !== "") {
        this.commentArray.push(user.comment);
      }
    }
    if (this.commentArray.length > 0) {
      this.commentShow = true;
    }
    this.showForm = false;
    this.buttonShow = true;
  }

  onClick(): void {
    this.buttonShow = false;
    this.showForm = true;
    this.name = "";
    this.comment = "";
  }
}
</script>

<style scoped>
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
</style>
