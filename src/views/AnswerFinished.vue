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
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr v-for="user of userList" v-bind:key="user.userId">
        <td>{{ user.name }}</td>
        <td v-for="answer of user.registerAnswer" v-bind:key="answer.id">
          {{ answer }}
        </td>
      </tr>
    </table>
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
  created(): void {
    this.eventInfo = this.$store.getters.getEvent;
    this.userList = this.$store.getters.getUserList;
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
