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
        <td v-for="(count,index) of currentAnswerCount" v-bind:key="index">
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
</template>

<script lang="ts">
import { RegisterUser } from "@/types/RegisterUser";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  // 現在の〇のカウント数
  private currentAnswerCount = new Array<number>();
  // 現在回答済のユーザー
  private userList = new Array<RegisterUser>();

  created(): void {
    // 回答済みのユーザー情報を取得する
    this.userList = this.$store.getters.getUserArray;
    // 〇のカウント数を取得する
    this.currentAnswerCount = this.$store.getters.getAnswerCount;
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
</style>
