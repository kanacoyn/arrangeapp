<template>
  <div>
    <table cellspacing="0" class="yui-calendar y2022" id="cal1Container">
      <thead>
        <tr>
          <th colspan="7" class="calhead">
            <div class="calheader">
              <a class="calnavleft" href="#">Last Month </a>
              2022年3月
              <a class="calnavright" href="#">Next Month </a>
            </div>
          </th>
        </tr>
        <tr class="calweekdayrow">
          <th class="calweekdaycell">日</th>
          <th class="calweekdaycell">月</th>
          <th class="calweekdaycell">火</th>
          <th class="calweekdaycell">水</th>
          <th class="calweekdaycell">木</th>
          <th class="calweekdaycell">金</th>
          <th class="calweekdaycell">土</th>
        </tr>
      </thead>
      <tbody class="m3 calbody">
        <tr class="w10">
          <td
            class="calcell oom calcelltop calcellleft"
            id="cal1Container_cell0"
          >
            27
          </td>
          <td class="calcell oom calcelltop" id="cal1Container_cell1">28</td>
          <td
            class="calcell wd2 d1 selectable calcelltop"
            id="cal1Container_cell2"
          >
            <a href="#" class="selector">1</a>
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
            <a href="#" class="selector">3</a>
          </td>
          <td
            class="calcell wd5 d4 selectable calcelltop"
            id="cal1Container_cell5"
          >
            <a href="#" class="selector">4</a>
          </td>
          <td
            class="calcell wd6 d5 selectable calcelltop calcellright"
            id="cal1Container_cell6"
          >
            <a href="#" class="selector">5</a>
          </td>
        </tr>
        <tr class="w11">
          <td
            class="calcell wd0 d6 selectable calcellleft"
            id="cal1Container_cell7"
          >
            <a href="#" class="selector">6</a>
          </td>
          <td class="calcell wd1 d7 selectable" id="cal1Container_cell8">
            <a href="#" class="selector">7</a>
          </td>
          <td class="calcell wd2 d8 selectable" id="cal1Container_cell9">
            <a href="#" class="selector">8</a>
          </td>
          <td class="calcell wd3 d9 selectable" id="cal1Container_cell10">
            <a href="#" class="selector">9</a>
          </td>
          <td class="calcell wd4 d10 selectable" id="cal1Container_cell11">
            <a href="#" class="selector">10</a>
          </td>
          <td class="calcell wd5 d11 selectable" id="cal1Container_cell12">
            <a href="#" class="selector">11</a>
          </td>
          <td
            class="calcell wd6 d12 selectable calcellright"
            id="cal1Container_cell13"
          >
            <a href="#" class="selector">12</a>
          </td>
        </tr>
        <tr class="w12">
          <td
            class="calcell wd0 d13 selectable calcellleft"
            id="cal1Container_cell14"
          >
            <a href="#" class="selector">13</a>
          </td>
          <td
            class="calcell wd1 d14 today selectable"
            id="cal1Container_cell15"
          >
            <a href="#" class="selector">14</a>
          </td>
          <td class="calcell wd2 d15 selectable" id="cal1Container_cell16">
            <a href="#" class="selector">15</a>
          </td>
          <td class="calcell wd3 d16 selectable" id="cal1Container_cell17">
            <a href="#" class="selector">16</a>
          </td>
          <td class="calcell wd4 d17 selectable" id="cal1Container_cell18">
            <a href="#" class="selector">17</a>
          </td>
          <td class="calcell wd5 d18 selectable" id="cal1Container_cell19">
            <a href="#" class="selector">18</a>
          </td>
          <td
            class="calcell wd6 d19 selectable calcellright"
            id="cal1Container_cell20"
          >
            <a href="#" class="selector">19</a>
          </td>
        </tr>
        <tr class="w13">
          <td
            class="calcell wd0 d20 selectable calcellleft"
            id="cal1Container_cell21"
          >
            <a href="#" class="selector">20</a>
          </td>
          <td class="calcell wd1 d21 selectable" id="cal1Container_cell22">
            <a href="#" class="selector">21</a>
          </td>
          <td class="calcell wd2 d22 selectable" id="cal1Container_cell23">
            <a href="#" class="selector">22</a>
          </td>
          <td class="calcell wd3 d23 selectable" id="cal1Container_cell24">
            <a href="#" class="selector">23</a>
          </td>
          <td class="calcell wd4 d24 selectable" id="cal1Container_cell25">
            <a href="#" class="selector">24</a>
          </td>
          <td class="calcell wd5 d25 selectable" id="cal1Container_cell26">
            <a href="#" class="selector">25</a>
          </td>
          <td
            class="calcell wd6 d26 selectable calcellright"
            id="cal1Container_cell27"
          >
            <a href="#" class="selector">26</a>
          </td>
        </tr>
        <tr class="w14">
          <td
            class="calcell wd0 d27 selectable calcellleft"
            id="cal1Container_cell28"
          >
            <a href="#" class="selector">27</a>
          </td>
          <td class="calcell wd1 d28 selectable" id="cal1Container_cell29">
            <a href="#" class="selector">28</a>
          </td>
          <td class="calcell wd2 d29 selectable" id="cal1Container_cell30">
            <a href="#" class="selector">29</a>
          </td>
          <td class="calcell wd3 d30 selectable" id="cal1Container_cell31">
            <a href="#" class="selector">30</a>
          </td>
          <td class="calcell wd4 d31 selectable" id="cal1Container_cell32">
            <a href="#" class="selector">31</a>
          </td>
          <td class="calcell oom" id="cal1Container_cell33">1</td>
          <td class="calcell oom calcellright" id="cal1Container_cell34">2</td>
        </tr>
        <tr class="w15">
          <td
            class="calcell oom calcellleft calcellbottom"
            id="cal1Container_cell35"
          >
            3
          </td>
          <td class="calcell oom calcellbottom" id="cal1Container_cell36">4</td>
          <td class="calcell oom calcellbottom" id="cal1Container_cell37">5</td>
          <td class="calcell oom calcellbottom" id="cal1Container_cell38">6</td>
          <td class="calcell oom calcellbottom" id="cal1Container_cell39">7</td>
          <td class="calcell oom calcellbottom" id="cal1Container_cell40">8</td>
          <td
            class="calcell oom calcellright calcellbottom"
            id="cal1Container_cell41"
          >
            9
          </td>
        </tr>
      </tbody>
    </table>

    <br />

    <textarea name="schedule" id="schedule" rows="10">
選択されたやつがここに表示
                        </textarea
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
