<template>
  <div>
    <div class="top-wrapper">
      <div class="container">
        <h1 class="page-title">イベント確認画面</h1>
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
                <tbody id="confirm">
                  <tr>
                    <th class="must">イベント名</th>
                    <td
                      v-for="eventInfo of eventConfirm"
                      v-bind:key="eventInfo.eventId"
                    >
                      {{ eventInfo.eventName }}
                    </td>
                  </tr>

                  <tr>
                    <th class="must">候補日程</th>
                    <td>2月17日<br /></td>
                  </tr>

                  <tr>
                    <th>イベント説明文</th>
                    <td>送別会</td>
                  </tr>

                  <tr>
                    <th>メールアドレス</th>
                    <td>ダミー</td>
                  </tr>

                  <tr>
                    <th>パスワード設定</th>
                    <td>ダミー</td>
                  </tr>

                  <tr>
                    <th>回答の選択肢</th>
                    <td>dami-</td>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Event } from "@/types/event";
import { Date } from "@/types/date";

@Component
export default class XXXComponent extends Vue {
  private eventConfirm = new Event(0, "", "", [], "", "", "");

  created(): void {
    this.eventConfirm = this.$store.getters.getEvent;
  }

  finishMakeEvent() {
    this.$router.push("/finishMaking");
  }
}
</script>

<style scoped>
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

#mainColumn {
}
</style>
