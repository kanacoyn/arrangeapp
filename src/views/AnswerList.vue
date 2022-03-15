<template>
  <div>
    <div>イベント名が入ります</div>
    <button type="button" v-on:click="changeAnswer">一括で変更する</button>
    <div v-show="canShow">
      <button type="button">〇</button>
      <button type="button">△</button>
      <button type="button">✕</button>
      <input type="checkbox" />入力済の行は変更しない
    </div>
    <div>
      <table border="1">
        <tr>
          <th></th>
          <th>山田</th>
          <th>鈴木</th>
        </tr>
        <tr>
          <td>3/15(火)</td>
          <td>
            <button type="button">〇</button>
            <button type="button">△</button>
            <button type="button">✕</button>
          </td>
          <td>〇</td>
        </tr>
        <tr>
          <td>3/16(水)</td>
          <td>
            <button type="button">〇</button>
            <button type="button">△</button>
            <button type="button">✕</button>
          </td>
          <td>〇</td>
        </tr>
        <tr>
          <td>3/17(木)</td>
          <td>
            <button type="button">〇</button>
            <button type="button">△</button>
            <button type="button">✕</button>
          </td>
          <td>〇</td>
        </tr>
      </table>
      <div>コメント：<input type="text" v-model="comment" /></div>
      <div>
        <button type="button">登録する</button>
        <router-link to="/answerQuestions">登録せずに戻る</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  // 一括変更の表示・非表示
  private canShow = false;
  // コメント
  private comment = "";

  changeAnswer(): void {
    if (this.canShow === false) {
      this.canShow = true;
    } else {
      this.canShow = false;
    }
  }
}
</script>

<style scoped></style>
