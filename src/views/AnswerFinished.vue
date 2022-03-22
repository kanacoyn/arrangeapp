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
      <tr v-for="user of userList" v-bind:key="user.userId">
        <td>{{ user.name }}</td>
        <td v-for="answer of user.registerAnswer" v-bind:key="answer.id">
          {{ answer }}
        </td>
      </tr>
    </table>
    <div v-show="commentShow">
      <div>コメント</div>
      <div v-for="user of userList" v-bind:key="user.userId">
        <div>{{ user.name }}</div>
        <div>{{ user.comment }}</div>
        <hr />
      </div>
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
  // コメントの配列
  private commentArray = new Array<string>();
  // コメントの表示・非表示
  private commentShow = false;

  created(): void {
    // 候補日程の数だけ〇のカウント数の配列に0を入れる
    for (let i = 1; i <= this.$store.getters.getDateList.length ?? 0; i++) {
      this.currentAnswerCount.push(0);
    }
    this.eventInfo = this.$store.getters.getEvent;
    this.userList = this.$store.getters.getUserArray;
    this.currentAnswerCount = this.$store.getters.getAnswerCount;

    // コメントを表示・非表示させる処理
    for (let user of this.userList) {
      if (user.comment !== "") {
        this.commentArray.push(user.comment);
      }
    }
    if (this.commentArray.length > 0) {
      this.commentShow = true;
    }
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
