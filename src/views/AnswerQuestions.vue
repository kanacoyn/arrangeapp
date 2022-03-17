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
        <div class="error">{{ errorName }}</div>
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
        </div>
        <div class="error">{{ errorDate }}</div>
      </div>
      <div class="item">
        <div>コメント</div>
        <div class="input">
          <input type="text" size="50" v-model="comment" />
        </div>
        <div class="error">{{ errorComment }}</div>
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
import { EventDate } from "@/types/date";
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
  // 回答の配列
  private answerArray = new Array<string>();
  // 日付の配列
  private dateArray = new Array<EventDate>();

  created(): void {
    this.eventInfo = this.$store.getters.getEvent;
    // 候補日程をgettersで取得する
    this.dateArray = this.$store.getters.getDateList;
  }

  /**
   * 回答を配列に格納する.
   * @param answer - セレクトボックスのvalue
   */
  onSelectItem(answer: string): void {
    this.answerArray.push(answer);
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

    if (this.answerArray.length !== this.dateArray.length) {
      this.errorDate = "回答が選択されていません";
      this.errorChecker = false;
    }

    if (this.errorChecker === false) {
      return;
    }

    // IDを発行し、ユーザー情報を登録する
    let userList = this.$store.getters.getUserList;
    let newId = 0;
    if (userList.length > 0) {
      console.log(userList);
      newId = Number(userList[0].userId) + 1;
    }
    // 回答内容を登録する
    this.$store.commit("registerAnswer", {
      registerUser: new RegisterUser(
        newId,
        this.name,
        this.dateArray,
        this.answerArray,
        this.comment
      ),
    });
    // 登録が成功したら完了画面に遷移する
    this.$router.push("/answerFinished");
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

.error {
  font-size: 13px;
  color: red;
}
</style>
