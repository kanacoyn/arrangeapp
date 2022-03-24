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
        <td rowspan="2">日本</td>
        <td v-for="date of eventInfo.date.date" v-bind:key="date.id">
          {{ date.date }}
        </td>
      </tr>
      <tr>
        <td v-for="time of eventInfo.date.dateTime" v-bind:key="time.id">
          {{ time.dateTime }}
        </td>
      </tr>
      <div v-for="city of eventInfo.cityArray" v-bind:key="city.id">
        <tr>
          <td rowspan="2">
            {{ city.name }}
          </td>
          <td v-for="date of city.date.date" v-bind:key="date.id">
            {{ date.date }}
          </td>
        </tr>
        <tr>
          <td v-for="time of city.date.dateTime" v-bind:key="time.id">
            {{ time.dateTime }}
          </td>
        </tr>
      </div>
      <!-- <tr>
        <td v-for="time of city.date.dateTime" v-bind:key="time.id">
          {{ time.dateTime }}
        </td>
      </tr> -->
    </table>
    <div class="datelist">
      <div class="answer">
        <div>第1候補</div>
        <div>第2候補</div>
        <div>第3候補</div>
      </div>
      <div class="country-list">
        <div class="country">東京</div>
        <div class="flex">
          <div class="date">
            <div v-for="date of eventInfo.date.date" v-bind:key="date.id">
              {{ date.date }}
            </div>
          </div>
          <div class="date">
            <div v-for="time of eventInfo.date.dateTime" v-bind:key="time.id">
              {{ time.dateTime }}
            </div>
          </div>
        </div>
      </div>
      <div class="global-city">
        <div
          class="country-list"
          v-for="city of eventInfo.cityArray"
          v-bind:key="city.id"
        >
          <div class="country">{{ city.name }}</div>
          <div class="flex">
            <div class="date">
              <div v-for="date of city.date.date" v-bind:key="date.id">
                {{ date.date }}
              </div>
            </div>
            <div class="date">
              <div v-for="time of city.date.dateTime" v-bind:key="time.id">
                {{ time.dateTime }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
    []
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

.flex {
  display: flex;
}

.date {
  margin-left: 15px;
}

.country {
  margin-bottom: 10px;
}

.country-list {
  margin-right: 30px;
}

.global-city {
  display: flex;
}

.datelist {
  border: solid 1px;
  padding: 20px;
  max-width: 1000px;
  display: flex;
  justify-content: center;
}

.answer {
  font-size: 14px;
  margin-top: 31px;
  margin-right: 10px;
}
</style>
