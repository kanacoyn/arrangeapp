<template>
  <div class="container">
    <table class="layoutTable">
      <tbody>
        <tr>
          <td id="leftside">
            <div class="calenderTitle">
              <th id="title">日時調整</th>
              カレンダーの日付を選択すると、<br />「候補日程」に日付が入力されます
            </div>

            第一候補：<input
              type="date"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedDateOption1"
            /> 
            <input
              type="time"
              step="1800"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedTimeOption1"
            />
            <br /><br />

            第二候補：<input
              type="date"
             
              id="dateSecondChoice"
              name="スケジュール"
            
              v-model="selectedDateOption2"
            />  <input
              type="time"
              step="1800"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedTimeOption2"
            /><br /><br />

            第三候補：<input
              type="date"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedDateOption3"
            />  <input
              type="time"
              step="1800"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedTimeOption3"
            />
            <br />
            <br />
            <div class="timeZoneTitle">
              <th id="title">海外との日時調整</th>
              <div id="timeZone">
                <input
                  type="checkbox"
                  id="shanghai"
                  value="shanghai"
                  v-model="timeZone"
               v-on:change="selectCity"
               v-show="showTimeZone"
                />
                <label for="shanghai">上海(Shang-Hai / China)</label><br />
                <input
                  type="checkbox"
                  id="newyork"
                  value="newyork"
                  v-model="timeZone"
                   v-on:change="selectCity"
               v-show="showTimeZone"
                />
                <label for="newyork">ニューヨーク(New York / USA)</label><br />
                <input
                  type="checkbox"
                  id="london"
                  value="london"
                  v-model="timeZone"
                   v-on:change="selectCity"
               v-show="showTimeZone"
                />
                <label for="london">ロンドン(London / England)</label><br />
                <input
                  type="checkbox"
                  id="stokholm"
                  value="stokholm"
                  v-model="timeZone"
                   v-on:change="selectCity"
               v-show="showTimeZone"
                />
                <label for="stokholm">ストックホルム( Stokholm / Sweden)</label
                ><br />
                <input
                  type="checkbox"
                  id="Johannesburg"
                  value="Johannesburg"
                  v-model="timeZone"
                   v-on:change="selectCity"
               v-show="showTimeZone"
                />
                <label for="Johannesburg"
                  >ヨハネスブルグ(Johannesburg / South Africa)</label
                ><br />
                <div>チェックされた値: {{ timeZone }}</div>
                <br />

                <button v-on:click="resetCity">
                  チェックした項目を取り消す
                </button>
              </div>
            </div>
          </td>

          <td id="mainColumn">
            <div class="mainbox">
              <h2><span>イベント新規作成</span></h2>
              <form>
                <div class="register">
                  <table width="100%">
                    <tr>
                      <th id="title">イベント名</th>
                      <td>
                        例 "打ち上げ" "送別会"<br />

                        <input
                          type="text"
                          name="eventname"
                          maxlength="250"
                          value=""
                          class="inputbox"
                          v-model="eventName"
                        />
                        <div class="error">{{ eventNameError }}</div>
                      </td>
                    </tr>

                    <tr>
                      <th id="title">候補日程</th>
                      <td>
                        ※1行に1つずつ候補日程を入力します。<br />
                        例 )
                        2022-03-24 / 17:00<br />
                       
                        左に表示されているカレンダーから日程を選択してください<br />

                        第一候補:
                        {{this.selectedDateOption1}} / 
                         {{this.selectedTimeOption1}}
                       
                        <br />
第二候補:{{this.selectedDateOption2}} / 
                         {{this.selectedTimeOption2}}
                       
<br />
                        第三候補:{{this.selectedDateOption3}} / 
                         {{this.selectedTimeOption3}}
                        
                        <div class="error">{{ dateError }}</div>
                      </td>
                    </tr>

                    <tr>
                      <th id="title">イベント説明文</th>
                      <td>
                        ※出欠登録ページの先頭に表示されます。<br /><textarea
                          name="explain"
                          rows="10"
                          v-model="description"
                        ></textarea>
                      </td>
                    </tr>

                    <tr>
                      <th id="title">メールアドレス</th>
                      <td>
                        ※入力されたアドレスに、登録内容の控えが送られます。
                        <br />
                        <input
                          type="text"
                          name="email"
                          maxlength="100"
                          value=""
                          v-model="email"
                        />
                        <div class="error">{{ emailError }}</div>
                      </td>
                    </tr>

                    <tr>
                      <th id="title">パスワード設定</th>
                      <td>
                        ※イベントを閲覧する場合のパスワードを設定できます。
                        <br />
                        <input
                          type="radio"
                          name="pw"
                          id="pw0"
                          value="0"
                          checked=""
                          v-model="password"
                        />
                        <label for="pw0">設定しない</label><br />
                        <input type="radio" name="pw" id="pw1" value="1" />
                        <label for="pw1">設定する</label><br />
                        <input
                          type="text"
                          name="password"
                          maxlength="8"
                          style="ime-mode: disabled; width: 100px"
                          value=""
                        />
                        (英数字8文字以内)
                      </td>
                    </tr>

                    <tr>
                      <th id="title">回答選択肢</th>
                      <td>
                        <input
                          type="radio"
                          name="eventchoice"
                          id="eventchoice1"
                          value="1"
                          checked=""
                          v-model="answerChoice"
                        />
                        <label for="eventchoice1">「○△×」から選択</label><br />

                        <input
                          type="radio"
                          name="eventchoice"
                          id="eventchoice2"
                          value="2"
                          v-model="answerChoice"
                        />
                        <label for="eventchoice2">「○×」から選択</label>
                      </td>
                    </tr>
                    <tr>
                      <th align="center">
                        <div class="row register-admin-btn">
                          <button
                            class="btn"
                            type="button"
                            v-on:click="eventInfo"
                          >
                            次に進む
                          </button>
                        </div>
                      </th>
                    </tr>
                  </table>
                </div>
              </form>
            </div>
          </td>

          <td id="rightside">
                  <th id="title">海外の時差換算日時</th>
             <div class="flex" v-show="showTimeZone">
           
            都市名
            {{timeZone}}
             <br />
            第一候補:
            {{this.selectedDateOption1}} / 
                         {{this.selectedTimeOption1}}
            
            <br />
            第二候補:{{this.selectedDateOption2}} / 
                         {{this.selectedTimeOption2}}
            
            <br />
            第三候補:
            {{this.selectedDateOption3}} / 
                         {{this.selectedTimeOption3}}
           </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { EventDate } from "@/types/date";
import { Component, Vue } from "vue-property-decorator";
import { Event } from "@/types/event";
import {Time} from "@/types/Time";
import {Date2} from "@/types/Date2";
import { City } from "@/types/City";

@Component
export default class XXXComponent extends Vue {
  // イベント名
  private eventName = "";
  // イベント説明ぶん
  private description = "";
  // 開催候補の日にち
  private date = "";
  // メールアドレス
  private email = "";
  // パスワード
  private password = "";
  // 回答方法の選択し
  private answerChoice = "";
  // イベント名
  private eventNameError = "";
  // 開催候補の日にち
  private dateError = "";
  // メールアドレス
  private emailError = "";

  private selectedDateOption = "";
  private selectedDateOption1 = [];
  private selectedDateOption2 = [];
  private selectedDateOption3 = [];
  private selectedTimeOption1 ="";
  private selectedTimeOption2 ="";
  private selectedTimeOption3 ="";
  private eventIdIndex = 1;
  private timeZone = [];

  private city = [];
   // 押下したら表示される時差を含んでいる候補日時
  private showTimeZone=true;
    // 世界の都市の配列
  private currentCityArray = Array<City>();


    private arrayDateOption = new Array<Date2>();
  private arrayTimeOption = new Array<Time>();

  eventInfo(): void {
    console.log("mutationに送る");

    // this.arrayDateOption.push(
    //   new EventDate(1, this.selectedDateOption1, []),
    //   new EventDate(1, this.selectedDateOption2, []),
    //   new EventDate(1, this.selectedDateOption3, [])
    // );

    this.$store.commit("eventInfo", {
      event: new Event(
        this.eventIdIndex,
        this.eventName,
        this.description,
        new EventDate(-1, this.arrayDateOption, this.arrayTimeOption),
        this.email,
        this.password,
        this.answerChoice,
        this.currentCityArray = this.timeZone
      ),
    });
    console.log("mutation成功");

    // 正規表示を定義
    let existError = false;
    // イベント名のエラー
    if (this.eventName === "") {
      this.eventNameError = "イベント名が空白です";
      existError = true;
    } else {
      this.eventNameError = "";
    }
    // メールアドレスのエラー
    if (this.email === "") {
      this.emailError = "メールアドレスが入力されていません";
      existError = true;
    } else if (this.email.indexOf("@") === -1) {
      this.emailError = "メールアドレスの形式が不正です";
      existError = true;
    } else {
      this.emailError = "";
    }
    // // 候補にちじのエラー
    // if (this.date === "yyyy-MM-dd") {
    //   this.dateError = "開催日時をご記入ください";
    //   existError = true;
    // } else {
    //   this.dateError = "";
    // }
    // 1つでもエラーがある場合は処理を終了する
    if (existError === true) {
      return; //処理終了のreturn
    }

    this.$router.push("/eventConfirm");
  }

  resetCity(): void {
    this.timeZone = [];
  }

// 都市名をクリックすることで時差を含んだ候補日時が右に表示される
selectCity():void{
console.log("都市名をv-on:changeで時差に表示させる");
this.currentCityArray = this.$store.getters.getCityArray;
this.showTimeZone=true;

 }
}


</script>

<style scoped>
.register {
  text-align: left;
  vertical-align: top;
}

.error {
  color: red;
}

#title {
  width: 150px;
}

.layoutTable tr td th{
    border-style: solid;
    border-width: thin black;

}

</style>

