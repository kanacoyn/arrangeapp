<template>
  <div class="home">
    <router-link to="/event"> イベントを作成する</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>
