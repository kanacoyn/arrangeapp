<template>
  <div class="home">
    <div class="catch-copy">イベント作成をラクに、快適に</div>
    <div><h1>楽楽調整</h1></div>
    <div class="block">
      <div class="circle">
        <img src="image/top2.png" width="300px" />
        <div>飲み会の予定も</div>
      </div>
      <div class="circle">
        <img src="image/top1.png" width="300px" />
        <div>ミーティングの設定も</div>
      </div>
    </div>
    <router-link to="/event"
      ><button class="btn">イベントを作成する</button></router-link
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>

<style scoped>
.catch-copy {
  width: 260px;
  margin: 0 auto;
  padding: 3px;
  background-color: white;
  border-radius: 10px;
}

.home {
  font-family: "Yu Gothic",'Noto Sans JP', sans-serif;
}

h1 {
  color: black;
}

.block {
  display: flex;
  justify-content: center;
}

.btn {
  width: 200px;
  height: 40px;
  margin-top: 20px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  font-family: "Yu Gothic",'Noto Sans JP', sans-serif;
  transition: all 0.3s ease 0s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-bottom: 180px;
}

.btn:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
