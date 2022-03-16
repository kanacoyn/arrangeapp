<template>
  <div>
    <div class="item">
      <div>名前</div>
      <div class="input"><input type="text" v-model="name" /></div>
    </div>
    <div class="item">
      <div>日程候補</div>
      <div class="datelist">
        <div>3/22(火)19:00～</div>
        <div>
          <select name="choice" id="choice" v-model="answer">
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
      <button type="button">登録する</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  // 名前
  private name = "";
  // 日程回答
  private answer = "";
  // コメント
  private comment = "";
}
</script>

<style scoped>
.datelist {
  display: flex;
  justify-content: center;
}

.item {
  margin-bottom: 20px;
}
</style>
