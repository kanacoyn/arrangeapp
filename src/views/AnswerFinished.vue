<template>
  <div>
    <table align="center">
      <tr>
        <th></th>
        <th v-for="date of eventInfo.date" v-bind:key="date.dateId">
          {{ date.date }}
        </th>
      </tr>
      <tr class="total">
        <td>合計</td>
        <td v-for="count of currentAnswerCount" v-bind:key="count.id">
          {{ count }}
        </td>
      </tr>
      <tr v-for="user of userList.userList" v-bind:key="user.userId">
        <td>{{ user.name }}</td>
        <td v-for="answer of user.registerAnswer" v-bind:key="answer.id">
          {{ answer }}
        </td>
      </tr>
    </table>
    <div>
      <div>コメント</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Event } from "@/types/event";
import { RegisterUser } from "@/types/RegisterUser";
@Component
export default class XXXComponent extends Vue {
  // 現在表示されているイベント内容
  private eventInfo = new Event(0, "", "", [], "", "", "");
  // 現在回答済のユーザー
  private userList = new Array<RegisterUser>();
  // 現在の〇のカウント数
  private currentAnswerCount = new Array<number>();

  created(): void {
    this.eventInfo = this.$store.getters.getEvent;
    this.userList = this.$store.getters.getUserList;
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
}

.total {
  background-color: lavenderblush;
}
</style>
