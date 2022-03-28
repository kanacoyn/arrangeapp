<template>
  <div class="home">
    <div class="catch-copy">イベント作成をラクに、快適に</div>
    <div><h1>楽々調整</h1></div>
    <div class="back-image"><img src="image/top3.png" width="1050px"></div>
    <div class="block">
      <div class="circle">
        <img src="image/top2.png" width="300px" />
      </div>
      <div class="circle">
        <img src="image/top1.png" width="300px" />
      </div>
    </div>
    <div>

    </div>
    <router-link to="/event"> イベントを作成する</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  max-width: 1920px;
  height: 500px;
  background-color: rgb(255, 145, 0);
  position: relative;
  margin: 0 auto;
}

h1{
  position: absolute;
  top: 70px;
  left: 700px;
  margin:0 auto;
  font-family: 'Yu Gothic';
  color: black;
}

.catch-copy {
  border-radius: 15px;
  width: 300px;
  padding: 6px;
  background-color: white;
  position: absolute;
  top: 5%;
  left: 37%;
  font-family: 'Yu Gothic';
}
</style>
