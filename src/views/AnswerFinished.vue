<template>
  <div>
    <div class="result">
      <table border="1">
        <tr>
          <th></th>
          <th>〇</th>
          <th>△</th>
          <th>✕</th>
        </tr>
        <tr v-for="date of eventInfo.date" v-bind:key="date.dateId">
          <td>{{ date.date }}</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <div>
      <div class="item">
        <div>名前</div>
        <div class="input"><input type="text" v-model="name" /></div>
        <div>{{ errorName }}</div>
      </div>
      <div class="item">
        <div>日程候補</div>
        <div
          class="datelist"
          v-for="date of eventInfo.date"
          v-bind:key="date.dateId"
        >
          <div>{{ date.date }}</div>
          <comp-select-box
            v-bind:date-id="date.dateId"
            v-on:select-item="onSelectItem"
          ></comp-select-box>
          <div>{{ errorDate }}</div>
        </div>
      </div>
      <div class="item">
        <div>コメント</div>
        <div class="input">
          <input type="text" size="50" v-model="comment" />
        </div>
        <div>{{ errorComment }}</div>
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
  // 名前のエラー
  private errorName = "";
  // 候補日のエラー
  private errorDate = "";
  // コメントのエラー
  private errorComment = "";
  // エラーチェック
  private errorChecker = true;

  created(): void {
    this.eventInfo = this.$store.getters.getEvent;
  }

  onSelectItem(): void {
    console.log("ok");
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

    if (this.errorChecker === false) {
      return;
    }

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
