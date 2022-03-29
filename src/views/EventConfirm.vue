<template>
  <div>
    <div class="top-wrapper">
      <div class="container">
        <h1 class="heading04">イベント確認画面</h1>
        <table class="layoutTable" border="1">
          <tbody id="main">
            <tr>
              <td id="leftSide">
                <h3>tableの左コラム</h3>
                <div id="adSpace">広告枠</div>
              </td>

              <td id="mainColumn">
                <h2><span>イベント新規作成</span></h2>
                <form action="create" name="inputform" method="post">
                  内容を確認して、「作成する」ボタンを押してください。
                  <tbody id="confirm" border="2">
                    <tr>
                      <th class="must">イベント名</th>
                      <td>
                        {{ this.eventInfo.eventName }}
                      </td>
                    </tr>

                    <tr>
                      <th class="must">候補日程</th>

                      <td>
                        第1候補 第2候補 第3候補
                        <div
                          class="datelist"
                          v-for="date of eventInfo.date.date"
                          v-bind:key="date.id"
                        >
                          {{ date.date }}
                        </div>
                        <div
                          class="datelist date"
                          v-for="time of eventInfo.date.dateTime"
                          v-bind:key="time.id"
                        >
                          <div>{{ time.dateTime }}</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>イベント説明文</th>
                      <td>{{ this.eventInfo.description }}</td>
                    </tr>

                    <tr>
                      <th>メールアドレス</th>
                      <td>{{ this.eventInfo.email }}</td>
                    </tr>

                    <tr>
                      <th>パスワード設定</th>
                      <td>{{ this.eventInfo.password }}</td>
                    </tr>

                    <tr>
                      <th>回答の選択肢</th>
                      <td>{{ this.eventInfo.answerChoice }}</td>
                    </tr>
                  </tbody>
                  <br />

                  <button type="button" v-on:click="finishMakeEvent">
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
.layoutTable {
  margin-left: auto;
  margin-right: auto;
}

#leftSide {
  width: 150px;
  text-align: left;
  vertical-align: top;
}

#adSpace {
  width: 150px;
  height: 450px;
  background: rosybrown;
}

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
</style>
