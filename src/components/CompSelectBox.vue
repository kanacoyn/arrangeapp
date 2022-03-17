<template>
  <div>
    <div class="datelist">
      <select
        name="choice"
        id="choice"
        v-model="selectAnswer"
        v-on:change="preclick"
      >
        <option value="">選択してください</option>
        <option value="1">〇</option>
        <option value="2">△</option>
        <option value="3">✕</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  // 親コンポーネントから受け取る日付ID
  @Prop()
  private dateId!: number;
  // 日程回答
  private selectAnswer = "";

  @Emit()
  selectItem(answer: string): void {
    console.log(answer);
  }
  preclick(): void {
    this.selectItem(this.selectAnswer);
  }
}
</script>

<style scoped></style>
