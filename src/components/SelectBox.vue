<template>
  <div>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  // 日程回答
  private selectAnswer = "";

  // selectItem():void{
  //   this.$store.commit("selectAnswer",{
  //     date: new Date(-1, "")
  //   })
  // }
}
</script>

<style scoped></style>
