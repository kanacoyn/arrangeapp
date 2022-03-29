<template>
  <div>
    <div class="top-wrapper">
      <div class="container">
        <h1 class="heading04">イベント確認画面</h1>
        <table class="layoutTable">
          <tbody id="main">
            <tr>
              <td id="leftSide">
                <h3>広告枠1</h3>
                <div id="adSpace">広告枠2</div>
              </td>

              <td id="mainColumn">
                <h2><span>イベント新規作成</span></h2>
                <form action="create" name="inputform" method="post">
                  内容を確認して、「作成する」ボタンを押してください。
                  <tbody style="border: none">
                    <tr>
                      <th>イベント名</th>
                      <td>
                        {{ this.eventInfo.eventName }}
                      </td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <th>
                        候補日程<br />
                        ※日本時間のみ表示
                      </th>
                      <td>
                        <div>第1候補</div>
                        <div>第2候補</div>
                        <div>第3候補</div>
                      </td>
                      <td>
                        <div
                          class="datelist"
                          v-for="date of eventInfo.date.date"
                          v-bind:key="date.id"
                        >
                          {{ date.date }} /
                        </div>
                      </td>
                      <td>
                        <div
                          class="datelist date"
                          v-for="time of eventInfo.date.dateTime"
                          v-bind:key="time.id"
                        >
                          {{ time.dateTime }}
                        </div>
                      </td>
                    </tr>

                    <tr></tr>

                    <tr>
                      <th>イベント説明文</th>
                      <td>{{ this.eventInfo.description }}</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <th>メールアドレス</th>
                      <td>{{ this.eventInfo.email }}</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <th>パスワード設定</th>
                      <td>{{ this.eventInfo.password }}</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <th>回答の選択肢</th>
                      <td>{{ this.eventInfo.answerChoice }}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                  <br />

                  <button
                    class="btn"
                    type="button"
                    v-on:click="finishMakeEvent"
                  >
                    送信する
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Event } from "@/types/event";
import { EventDate } from "@/types/date";
import { Date2 } from "@/types/Date2";

@Component
export default class XXXComponent extends Vue {
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

  private dateArray = new Array<Date2>();

  created(): void {
    this.eventInfo = this.$store.getters.getEvent;

    // 候補日程をgettersで取得する
    this.dateArray = this.$store.getters.getDateList;
  }

  finishMakeEvent() {
    this.$router.push("/answerQuestions");
  }
}
</script>

<style scoped>
.top-wrapper {
  width: 100%;
  height: 1000px;
  font-family: "Yu Gothic", "Noto Sans JP", sans-serif;
}

.layoutTable {
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 10px;
  border-collapse: collapse;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

#leftSide {
  width: 150px;
  text-align: left;
  vertical-align: top;
  border-right: 1px solid #bdbdbd;
}

#mainColumn {
  padding: 20px;
}

#adSpace {
  width: 150px;
  height: 350px;
  background: rosybrown;
}

/* td {
  border-right: 1px solid #000000;
  border-left: 1px solid #000000;
} */

.heading04 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-align: center;
}

.heading04::before,
.heading04::after {
  content: "";
  width: 3px;
  height: 40px;
  background-color: orange;
}

.heading04::before {
  margin-right: 30px;
  transform: rotate(-35deg);
}
.heading04::after {
  margin-left: 30px;
  transform: rotate(35deg);
}

.btn {
  width: 150px;
  height: 40px;
  margin-left: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-family: "Yu Gothic", "Noto Sans JP", sans-serif;
  transition: all 0.3s ease 0s;
  background-color: orange;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.btn:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
