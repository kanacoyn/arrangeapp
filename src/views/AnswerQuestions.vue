<template>
  <div>
    <div>
      <div>{{ currentEvent.eventName }}</div>
      <table>
        <tr v-for="date of currentEventDate" v-bind:key="date.id">
          {{
            date.date
          }}
        </tr>
      </table>
    </div>
    <div>
      名前：<input type="text" v-model="name" />
      <button type="button" v-on:click="addName">新規追加する</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RegisterUser } from "@/types/RegisterUser";
import { Event } from "@/types/event";
@Component
export default class XXXComponent extends Vue {
  // 現在表示されているイベントの日程候補
  private currentEventDate = new Array<Date>();
  // 名前
  private name = "";

  // 現在表示されているイベント
  // private currentEvent = new Event("", "", [], "", "", "");

  created(): void {
    this.currentEventDate = this.$store.getters.getDateList;
    // this.currentEvent = this.$store.getters.getEvent;
  }
  /**
   * 名前を入力して回答を作成する.
   */
  addName(): void {
    // 名前が未入力のとき
    if (this.name === "") {
      alert("名前を入力してください");
      return;
    }
    // 名前をstateに格納する
    this.$store.commit("addName", {
      registerUser: new RegisterUser(0, this.name, [], "", ""),
    });

    // 回答ページに遷移
    this.$router.push("/answerList");
  }
}
</script>

<style scoped></style>
