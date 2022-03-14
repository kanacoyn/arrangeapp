<template>
  <div class="container">
    <tbody>
      <tr>
        <td id="mainColumn">
          <div class="mainbox">
            <h2><span>イベント新規作成</span></h2>
            <form action="confirm">
              <div class="register">
                <table width="100%">
                  <tr>
                    <th>イベント名</th>
                    <td>
                      例 "打ち上げ" "送別会"<br />

                      <input
                        type="text"
                        name="eventname"
                        maxlength="250"
                        value=""
                        class="inputbox"
                        width="80"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>候補日程</th>
                    <td>
                      ※1行に1つずつ候補日程を入力します。候補日程の書き方は自由です。<br />
                      例 <br />
                      7/27(金) 20:00～<br />
                      7/28(土) 19:00～<br />
                      (←左に表示されているカレンダーから日程を選択することもできます。)<br />
                      <textarea
                        name="schedule"
                        id="schedule"
                        rows="10"
                        width="80"
                      ></textarea>
                    </td>
                  </tr>

                  <tr>
                    <th>イベント説明文</th>
                    <td>
                      ※出欠登録ページの先頭に表示されます。<br /><textarea
                        name="explain"
                        rows="10"
                        width="80"
                      ></textarea>
                    </td>
                  </tr>

                  <tr>
                    <th>メールアドレス</th>
                    <td>
                      ※入力されたアドレスに、登録内容の控えが送られます。
                      <br />
                      <input
                        type="text"
                        name="email"
                        maxlength="100"
                        value=""
                        width="80"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>パスワード設定</th>
                    <td>
                      ※イベントを閲覧する場合のパスワードを設定できます。
                      <br />
                      <input
                        type="radio"
                        name="pw"
                        id="pw0"
                        value="0"
                        checked=""
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
                    <th>回答選択肢</th>
                    <td>
                      <input
                        type="radio"
                        name="eventchoice"
                        id="eventchoice1"
                        value="1"
                        checked=""
                      />
                      <label for="eventchoice1">「○△×」から選択</label><br />

                      <input
                        type="radio"
                        name="eventchoice"
                        id="eventchoice2"
                        value="2"
                      />
                      <label for="eventchoice2">「○×」から選択</label>
                    </td>
                  </tr>
                  <tr>
                    <th align="center">
                      <input
                        type="button"
                        value="次に進む"
                        onclick="confirmEvent"
                        style="width: 200px"
                      />
                    </th>
                  </tr>
                </table>
              </div>
            </form>
          </div>
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  confirmEvent() {
    this.$router.push("/confirmEvent");
  }
}
</script>

<style scoped>
.register {
  text-align: left;
}
</style>
