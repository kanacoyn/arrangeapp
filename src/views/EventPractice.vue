<template>
<div class="block">
  <div class="container">
       <h2 class="heading04"><span>イベント新規作成</span></h2>
    <table class="layoutTable">
      <tbody >
        <tr>
          <td id="leftside">
            <div class="calenderTitle">
              <th id="title" class="heading01">日時調整</th>
              <br />
              カレンダーの日付を選択すると、<br />「候補日程」に日付が入力されます
            </div>
<br />
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
              <th id="title" class="heading01">海外との日時調整</th><br />
調整したい海外都市を選択することも可能です。<br />
              <div id="timeZone">
                  <br />
                <input
                  type="checkbox"
                  id="shanghai"
                  value="shanghai"
                  v-model="timeZone1"
               v-on:change="selectShanghai"
            
                />
                <label for="shanghai">上海(Shang-Hai / China)</label><br />
                <input
                  type="checkbox"
                  id="newyork"
                  value="newyork"
                  v-model="timeZone2"
                   v-on:change="selectNewyork"
              
                />
                <label for="newyork">ニューヨーク(New York / USA)</label><br />
                <input
                  type="checkbox"
                  id="london"
                  value="london"
                  v-model="timeZone3"
                   v-on:change="selectLondon"
              
                />
                <label for="london">ロンドン(London / England)</label><br />
                <input
                  type="checkbox"
                  id="stokholm"
                  value="stokholm"
                  v-model="timeZone4"
                   v-on:change="selectStokholm"
              
                />
                <label for="stokholm">ストックホルム( Stokholm / Sweden)</label
                ><br />
                <input
                  type="checkbox"
                  id="Johannesburg"
                  value="Johannesburg"
                  v-model="timeZone5"
                   v-on:change="selectJohannesburg"
             
                />
                <label for="Johannesburg"
                  >ヨハネスブルグ(Johannesburg / South Africa)</label
                ><br />
          
                <br />

                <button class="delete-btn btn-color1" v-on:click="resetCity">
                  チェックした項目を取り消す
                </button>
              </div>
            </div>
          </td>

          <td id="mainColumn">
            <div class="mainbox">
             
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
                    
                  </table>
                   <button
                            class="next-page-btn btn-color2"
                            type="button"
                            v-on:click="eventInfo"
                          >
                            次に進む
                          </button>
                </div>
              </form>
            </div>
          </td>

          <td id="rightside">
                  <th id="title" class="heading01">海外の時差換算日時</th>
             <div class="flex">
  <div class="city1" v-show="showShanghai">
      <div class="cityTitle">
            都市名
            {{timeZone1}}
    
             <br />
            第一候補:
            <input
              type="date"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedDateOption1"
        
            /> / 
                    <input
              type="time"
              step="1800"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedTimeOption1"
            />
            
            <br />
            第二候補:<input
              type="date"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedDateOption2"
            />  /  <input
              type="time"
              step="1800"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedTimeOption2"
            /><br />

            第三候補:<input
              type="date"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedDateOption3"
            />  /  <input
              type="time"
              step="1800"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedTimeOption3"
            />
            </div></div><br />
  <div class="city2" v-show="showNewyork">
       <div class="cityTitle">
            都市名
            {{timeZone2}}
    
             <br />
            第一候補:
            <input
              type="date"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedDateOption1"
            /> / 
                    <input
              type="time"
              step="1800"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedTimeOption1"
            />
            
            <br />
            第二候補:<input
              type="date"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedDateOption2"
            />  /  <input
              type="time"
              step="1800"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedTimeOption2"
            /><br />

            第三候補:<input
              type="date"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedDateOption3"
            />  /  <input
              type="time"
              step="1800"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedTimeOption3"
            />
            </div></div><br />
  <div class="city3" v-show="showLondon"><div class="cityTitle">
            都市名
            {{timeZone3}}
    
             <br />
            第一候補:
            <input
              type="date"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedDateOption1"
            /> / 
                    <input
              type="time"
              step="1800"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedTimeOption1"
            />
            
            <br />
            第二候補:<input
              type="date"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedDateOption2"
            />  /  <input
              type="time"
              step="1800"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedTimeOption2"
            /><br />

            第三候補:<input
              type="date"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedDateOption3"
            />  /  <input
              type="time"
              step="1800"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedTimeOption3"
            />
            </div></div><br />
  <div class="city4" v-show="showStokholm"><div class="cityTitle">
            都市名
            {{timeZone4}}
    
             <br />
            第一候補:
            <input
              type="date"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedDateOption1"
            /> / 
                    <input
              type="time"
              step="1800"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedTimeOption1"
            />
            
            <br />
            第二候補:<input
              type="date"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedDateOption2"
            />  /  <input
              type="time"
              step="1800"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedTimeOption2"
            /><br />

            第三候補:<input
              type="date"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedDateOption3"
            />  /  <input
              type="time"
              step="1800"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedTimeOption3"
            />
            </div></div><br />

  <div class="city5" v-show="showJohannesburg"><div class="cityTitle">
            都市名
            {{timeZone5}}
    
             <br />
            第一候補:
            <input
              type="date"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedDateOption1"
            /> / 
                    <input
              type="time"
              step="1800"
              id="dateFirstChoice"
              name="スケジュール"
              v-model="selectedTimeOption1"
            />
            
            <br />
            第二候補:<input
              type="date"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedDateOption2"
            />  /  <input
              type="time"
              step="1800"
              id="dateSecondChoice"
              name="スケジュール"
              v-model="selectedTimeOption2"
            /><br />

            第三候補:<input
              type="date"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedDateOption3"
            />  /  <input
              type="time"
              step="1800"
              id="dateThirdChoice"
              name="スケジュール"
              v-model="selectedTimeOption3"
            />
            </div>
           
           </div>
           </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script lang="ts">
import { EventDate } from "@/types/date";
import { Component, Vue } from "vue-property-decorator";
import { Event } from "@/types/event";
import { Time } from "@/types/Time";
import { Date2 } from "@/types/Date2";
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
  private timeZone1="";
  private timeZone2="";
  private timeZone3="";
  private timeZone4="";
  private timeZone5="";
  private showShanghai=false;
  private showNewyork=false;
  private showLondon=false;
  private showStokholm=false;
  private showJohannesburg=false;
  

  private city = [];
   // 押下したら表示される時差を含んでいる候補日時
  private showTimeZone=true;
    // 世界の都市の配列
  private currentCityArray = Array<City>();


    private arrayDateOption = new Array<Date2>();
  private arrayTimeOption = new Array<Time>();

  eventInfo(): void {
    console.log("mutationに送る");

    this.currentCityArray.push(
      new City(1, this.timeZone1,new EventDate(-1, this.arrayDateOption, this.arrayTimeOption)),
      new City(1, this.timeZone2,new EventDate(-1, this.arrayDateOption, this.arrayTimeOption)),
      new City(1, this.timeZone3,new EventDate(-1, this.arrayDateOption, this.arrayTimeOption)),
      new City(1, this.timeZone4,new EventDate(-1, this.arrayDateOption, this.arrayTimeOption)),
      new City(1, this.timeZone5,new EventDate(-1, this.arrayDateOption, this.arrayTimeOption)),
    );
    console.log("都市の配列をpush");
    
//  this.arrayDateOption.push(
//       new EventDate(1, this.selectedDateOption1, []),
//       new EventDate(1, this.selectedDateOption2, []),
//       new EventDate(1, this.selectedDateOption3, [])
//     );

    this.$store.commit("eventInfo", {
      event: new Event(
        this.eventIdIndex,
        this.eventName,
        this.description,
        new EventDate(-1, this.arrayDateOption, this.arrayTimeOption),
        this.email,
        this.password,
        this.answerChoice,
        this.currentCityArray
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

// 選択した都市をリセット
  resetCity(): void {
    this.timeZone1 = "";
    this.timeZone2 = "";
    this.timeZone3 = "";
    this.timeZone4 = "";
    this.timeZone5 = "";
this.showShanghai=false;
  this.showNewyork=false;
  this.showLondon=false;
  this.showStokholm=false;
  this.showJohannesburg=false;
  }

// 都市名をクリックすることで時差を含んだ候補日時が右に表示される
selectShanghai():void{
this.showShanghai=true;
this.timeZone1="上海";
}
selectNewyork():void{
this.showNewyork=true;
this.timeZone2="ニューヨーク";
}
selectLondon():void{
this.showLondon=true;
this.timeZone3="ロンドン";
}
selectStokholm():void{
this.showStokholm=true;
this.timeZone4="ストックホルム";
}
selectJohannesburg():void{
this.showJohannesburg=true;
this.timeZone5="ヨハネスブルグ";
}



}


</script>

<style scoped>
.block {
  width: 100%;
  height: 1000px;
}

.container{
  font-family: "Yu Gothic";
  
}

.layoutTable{
    margin-left:auto;margin-right:auto;
    background-color: white;
    border-radius: 10px;
}

#leftside{
  padding: 20px;
  border-right: 1px solid #bdbdbd;
}

#rightside{
  padding: 20px;
  border-left: 1px solid #bdbdbd;
}

.error {
  color: red;
}

.mainbox td{
text-align: left;
}
.mainbox th{
text-align: top;
}
/* h2のタイトル用 */
.heading04 {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 26px;
	text-align: center;
}

.heading04::before,
.heading04::after {
	content: '';
	width: 3px;
	height: 40px;
	background-color: orange;
}

.heading04::before {
	margin-right: 30px;
	transform: rotate(-35deg)
}
.heading04::after {
	margin-left: 30px;
	transform: rotate(35deg)
}
/* h2のタイトル用 */

/* サブタイトルの色 */
.heading01 {
	display: inline;
	font-size: 20px;
	background-image: linear-gradient(rgba(0,0,0,0) 70%, #ff9100 70%);
}

.next-page-btn {
  width: 150px;
  height: 40px;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom:30px;
  border: none;
  border-radius: 5px;
  font-family: "Yu Gothic";
  transition: all 0.3s ease 0s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.delete-btn{
  width: 200px;
  height: 40px;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom:30px;
  border: none;
  border-radius: 5px;
  font-family: "Yu Gothic";
  transition: all 0.3s ease 0s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.next-page-btn:hover {
  opacity: 0.7;
  cursor: pointer;
}

.delete-btn:hover {
  opacity: 0.7;
  cursor: pointer;
}

.btn-color1 {
  background-color: rgb(142, 200, 255);
}

.btn-color2 {
  background-color: orange;
}
</style>

