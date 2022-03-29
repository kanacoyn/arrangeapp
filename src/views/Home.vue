<template>
  <div class="home">
    <div>イベント作成をラクに、快適に</div>
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
    <router-link to="/event"><button class="btn">イベントを作成する</button></router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>

<style scoped>
.home{
  font-family: "Yu Gothic";
}

h1 {
  color: black;
}

.block{
  display: flex;
  justify-content: center;
}

.btn{
  width: 150px;
  height: 40px;
  margin-top: 20px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  font-family: "Yu Gothic";
  transition: all 0.3s ease 0s;
}

.btn:hover{
  opacity: 0.7;
  cursor: pointer;
}
</style>
