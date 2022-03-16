<template>
  <div>
    <div class="item">
      <div>名前</div>
      <div class="input"><input type="text" v-model="name" /></div>
    </div>
    <div class="item">
      <div>日程候補</div>
      <div
        class="datelist"
        v-for="date of eventInfo.date"
        v-bind:key="date.dateId"
      >
        <div>{{ date.date }}</div>
        <div class="datelist">
          <select
            name="choice"
            id="choice"
            v-model="selectAnswer"
            v-on:change="selectItem"
          >
            <option value="">選択してください</option>
            <option value="1">〇</option>
            <option value="2">△</option>
            <option value="3">✕</option>
          </select>
        </div>
      </div>
    </div>
    <div class="item">
      <div>コメント</div>
      <div class="input"><input type="text" size="50" v-model="comment" /></div>
    </div>
    <div>
      <button type="button" v-on:click="registerAnswer">登録する</button>
    </div>
  </div>
</template>

<script lang="ts">
import { RegisterUser } from "@/types/RegisterUser";
import { Event } from "@/types/event";
import { Component, Vue } from "vue-property-decorator";
import { Date } from "@/types/date";
@Component
export default class XXXComponent extends Vue {
  // 名前
  private name = "";
  // 日程回答
  private selectAnswer = "";
  // コメント
  private comment = "";
  // 現在表示されているイベント内容
  private eventInfo = new Event(0, "", "", [], "", "", "");

  created(): void {
    this.eventInfo = new Event(
      1,
      "飲み会",
      "池袋駅周辺で行います",
      [
        new Date(1, "2022/3/16", ""),
        new Date(2, "2022/3/20", ""),
        new Date(3, "2022/3/22", ""),
      ],
      "abc@gmail.com",
      "12345",
      ""
    );
  }

  /**
   * 回答内容を登録する.
   */
  registerAnswer(): void {
    let userList = this.$store.getters.getUserList;
    let newId = 0;
    if (userList.length > 0) {
      console.log(userList);
      newId = Number(userList[0].userId) + 1;
    }
    this.$store.commit("registerAnswer", {
      registerUser: new RegisterUser(newId, this.name, [], this.comment),
    });
    this.$router.push("/logList");
  }

  // selectItem():void{
  //   this.$store.commit("selectAnswer",{
  //     date: new Date(-1, "")
  //   })
  // }
}
</script>

<style scoped>
.datelist {
  display: flex;
  justify-content: center;
  margin-left: 20px;
}

.item {
  margin-bottom: 20px;
}
</style>
