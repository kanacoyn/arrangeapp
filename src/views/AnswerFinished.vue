<template>
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
</style>
