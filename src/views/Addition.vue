<template>
  <div>
    <table border="1">
      <tr>
        <th></th>
        <th>第1候補</th>
        <th>第2候補</th>
        <th>第3候補</th>
      </tr>
      <tr>
        <td>日本</td>
        <td>2022/3/16</td>
        <td>2022/3/20</td>
        <td>2022/3/22</td>
      </tr>
      <tr>
        <td>アメリカ</td>
        <td>2022/3/16</td>
        <td>2022/3/20</td>
        <td>2022/3/22</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
