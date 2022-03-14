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
                      ></textarea>
                    </td>
                  </tr>

                  <tr>
                    <th>イベント説明文</th>
                    <td>
                      ※出欠登録ページの先頭に表示されます。<br /><textarea
                        name="explain"
                        rows="10"
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
                      />
                    </td>
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
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
