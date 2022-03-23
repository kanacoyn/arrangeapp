<template>
  <div>
    <table align="center">
      <tr>
        <th></th>
        <th>第1候補</th>
        <th>第2候補</th>
        <th>第3候補</th>
      </tr>
      <tr>
        <td>日本</td>
        <td v-for="date of eventInfo.date" v-bind:key="date.id">
          <div>{{ date.date }}</div>
          <div>{{ date.dateTime }}</div>
        </td>
      </tr>
      <tr v-for="city of eventInfo.cityArray" v-bind:key="city.id">
        <td>{{ city.name }}</td>
        <td v-for="date of city.dateArray" v-bind:key="date.id">
          <div>{{ date.date }}</div>
          <div>{{ date.dateTime }}</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { City } from "@/types/City";
import { EventDate } from "@/types/date";
import { Event } from "@/types/event";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  // 現在表示されているイベント内容
  private eventInfo = new Event(
    0,
    "",
    "",
    new EventDate(0, [], []),
    "",
    "",
    "",
    new City(0, [], [])
  );

  created(): void {
    this.eventInfo = this.$store.getters.getEvent;
  }
}
</script>

<style scoped>
th,
td {
  border: solid 1px;
  padding: 20px;
}

table {
  border-collapse: collapse;
  margin-bottom: 30px;
}
</style>
