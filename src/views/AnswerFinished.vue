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
        <comp-select-box v-bind:date-id="date.dateId"></comp-select-box>
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
import CompSelectBox from "@/components/CompSelectBox.vue";
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
</style>
