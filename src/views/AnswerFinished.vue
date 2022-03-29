<template>
  <div>
    <h1 class="heading04">イベント日時確認</h1>
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
          {{ count.answerCount }}
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
    <div v-show="commentShow">
      <div class="title">コメント</div>
      <div v-for="user of commentUserArray" v-bind:key="user.userId">
        <div>
          {{ user.name }}: <span>{{ user.comment }}</span>
        </div>
        <hr />
      </div>
    </div>
    <button type="button" v-on:click="onClick">回答フォームに戻る</button>
    <a href="https://zoom.us/signin">ZoomのURLを発行する</a>
  </div>
</template>

<script lang="ts">
import { AnswerCount } from "@/types/AnswerCount";
import { RegisterUser } from "@/types/RegisterUser";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  // 現在の〇のカウント数
  private currentAnswerCount = new Array<AnswerCount>();
  // 現在回答済のユーザー
  private userList = new Array<RegisterUser>();
  // コメントの配列
  private commentArray = new Array<string>();
  // コメントの表示・非表示
  private commentShow = false;
  private userCommentShow = false;
  // コメント回答者の配列
  private commentUserArray = new Array<RegisterUser>();

  created(): void {
    // 回答済みのユーザー情報を取得する
    this.userList = this.$store.getters.getUserArray;
    // 〇のカウント数のオブジェクトを取得する
    this.currentAnswerCount = this.$store.getters.getAnswerCount;
    console.log(this.currentAnswerCount);

    // コメントを表示・非表示させる処理
    for (let user of this.userList) {
      if (user.comment !== "") {
        this.commentUserArray.push(user);
      }
    }
    if (this.commentUserArray.length > 0) {
      this.commentShow = true;
    }
  }

  /**
   * 回答者遷移ページに戻る.
   */
  onClick(): void {
    this.$router.push("/answerQuestions");
  }
}
</script>

<style scoped>
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

.title {
  margin-bottom: 10px;
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
