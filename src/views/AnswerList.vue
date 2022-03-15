<template>
  <div>
    <div>イベント名が入ります</div>
    <div class="table">
      <table border="1">
        <tr>
          <th></th>
          <th>{{ currentRegisterUser.name }}</th>
          <th>鈴木</th>
        </tr>
        <tr>
          <td>3/15(火)</td>
          <td>
            <select name="choice" id="choice">
              <option value="0">選択してください</option>
              <option value="1">〇</option>
              <option value="2">△</option>
              <option value="3">✕</option>
            </select>
          </td>
          <td>〇</td>
        </tr>
      </table>
      <div>コメント：<input type="text" v-model="comment" /></div>
      <div>
        <button type="button" v-on:click="registerAnswer">登録する</button>
        <router-link to="/answerQuestions">登録せずに戻る</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RegisterUser } from "@/types/RegisterUser";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  // 一括変更の表示・非表示
  private canShow = false;
  // コメント
  private comment = "";
  // 登録者情報
  private currentRegisterUser = new RegisterUser(0, "", [], "", "");

  created(): void {
    this.currentRegisterUser = this.$store.state.registerUser;
  }

  /**
   * 一括変更するのボタンを押す.
   */
  changeAnswer(): void {
    if (this.canShow === false) {
      this.canShow = true;
    } else {
      this.canShow = false;
    }
  }

  /**
   * 回答を登録する.
   */
  registerAnswer(): void {
    this.$router.push("/answerFinished");
  }
}
</script>

<style scoped></style>
