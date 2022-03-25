<template>
  <div>
    <table align="center">
      <tr>
        <th></th>
        <th>第1候補</th>
        <th>第2候補</th>
        <th>第3候補</th>
      </tr>
      <tr class="total">
        <td>合計</td>
        <td v-for="count of currentAnswerCount" v-bind:key="count.id">
          {{ count }}
        </td>
      </tr>
      <tr v-for="user of userList" v-bind:key="user.userId">
        <td>
          <router-link v-bind:to="'/userAnswer/' + user.userId">{{
            user.name
          }}</router-link>
        </td>
        <td v-for="answer of user.registerAnswer" v-bind:key="answer.id">
          {{ answer }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped>
th,
td {
  border: solid 1px;
  padding: 10px;
}

table {
  border-collapse: collapse;
  margin-bottom: 30px;
}

.total {
  background-color: lavenderblush;
}
</style>
