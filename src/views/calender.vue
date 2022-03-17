<template>
  <div>
    <div id="header">
      <span class="header-arrow" @touchstart="lastMonth">＜</span>
      <span>{{ year }}年{{ month }}月</span>
      <span class="header-arrow" @touchstart="nextMonth">＞</span>
    </div>

    <table id="main">
      <thead>
        <th v-for="(dayName, dayIndex) in weekdays" :key="dayIndex">
          {{ dayName }}
        </th>
      </thead>
      <tbody>
        <tr
          v-for="(weekData, weekDataIndex) in calendar"
          :key="weekDataIndex"
          selectable
        >
          <td
            v-for="(dayNumber, dayNumberIndex) in weekData"
            :key="dayNumberIndex"
            :class="{ today: isToday(dayNumber) }"
            selectable
          >
            <span v-if="isToday(dayNumber)">今日</span>
            <span v-else selectable>{{ dayNumber }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <tbody class="m3 calbody">
      <tr class="w10">
        <td class="calcell oom calcelltop calcellleft" id="cal1Container_cell0">
          27
        </td>
        <td class="calcell oom calcelltop" id="cal1Container_cell1">28</td>
        <td
          class="calcell wd2 d1 selectable calcelltop"
          id="cal1Container_cell2"
        >
          <a href="#" class="selector" v-on:change="addDate">1</a>
        </td>
        <td
          class="calcell wd3 d2 selectable calcelltop"
          id="cal1Container_cell3"
        >
          <a href="#" class="selector">2</a>
        </td>
        <td
          class="calcell wd4 d3 selectable calcelltop"
          id="cal1Container_cell4"
        >
          <input class="selector" value="3" />
        </td>
      </tr>
    </tbody>

    <textarea name="schedule" id="schedule" rows="10" v-model="addDate">
    </textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekdays: ["日", "月", "火", "水", "木", "金", "土"],
      year: 2021,
      month: 3,
      today: "",
    };
  },
  computed: {
    calendar: function () {
      let calendar = [];
      let firstWeekDay = new Date(this.year, this.month - 1, 1).getDay();
      let lastDay = new Date(this.year, this.month, 0).getDate();
      let dayNumber = 1;
      while (dayNumber <= lastDay) {
        let weekData = [];
        for (let i = 0; i <= 6; i++) {
          if (calendar.length == 0 && i < firstWeekDay) {
            weekData[i] = "";
          } else if (lastDay < dayNumber) {
            weekData[i] = "";
          } else {
            weekData[i] = dayNumber;
            dayNumber++;
          }
        }
        calendar.push(weekData);
      }
      return calendar;
    },
  },
  methods: {
    lastMonth: function () {
      if (this.month == 1) {
        this.year--;
        this.month = 12;
      } else {
        this.month--;
      }
    },
    nextMonth: function () {
      if (this.month == 12) {
        this.year++;
        this.month = 1;
      } else {
        this.month++;
      }
    },

    addDate: function () {
      const dateOption = new Array(String);
      this.dateOption.push(this.year, this.month, this.day);
      let selectedDate = dateOption;
      console.log("テスト");
      return selectedDate;
    },

    //ここから追加
    isToday: function (day) {
      let date = this.year + "-" + this.month + "-" + day;
      if (this.today == date) {
        return true;
      }
      return false;
    },
    //ここまで追加
  },

  mounted() {
    let date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    let actualDay = date.getDate();
    this.today = this.year + "-" + this.month + "-" + actualDay;
  },
};
</script>

<style>
#main {
  font-size: 14px;
  line-height: 20px;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
}
#main th {
  padding: 0;
  text-align: center;
  vertical-align: middle;
  font-weight: normal;
  color: #999;
}
#main td {
  padding: 8px;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid #ddd;
}
.today {
  background-color: #fcf8e3;
}
#header {
  font-size: 24px;
  padding: 0;
  text-align: center;
  margin-bottom: 10px;
  background-color: darkorange;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
#header span {
  padding: 15px 20px;
  color: white;
  display: inline-block;
}
</style>
