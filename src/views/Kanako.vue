<template>
  <div class="container">
    <div class="flex">
      <table class="feedback">
        <tr>
          <th class="leftcol">項目</th>
          <th class="rightcol">気づき</th>
        </tr>
        <tr class="function">
          <td>担当した機能</td>
          <td>
            <ol>
              <li><strong>イベント作成ページ</strong></li>
              <ul>
                <li>日本時間での日時調整</li>
                <li>海外との調整</li>
                <li>イベント作成本文</li>
                <li>海外時間の確認</li>
              </ul>
              <li><strong>イベント確認ページ</strong></li>
              <ul>
                <li>記載されたイベント内容の表示</li>
              </ul>
            </ol>
          </td>
        </tr>
        <tr class="notFunction">
          <td>実装できなかった機能</td>
          <td>
            <ol>
              <li><strong>イベント作成ページ</strong></li>
              <ul>
                <li>UIの向上</li>
                <li>カレンダー表記</li>
                <li>日にちと時間の同時表記</li>
                <li>時間の縛り(30分刻み等)</li>
                <li>回答選択肢の分岐</li>
                <li>海外時間の自動計算</li>
              </ul>
            </ol>
          </td>
        </tr>

        <tr class="learning">
          <td>学んだ点</td>
          <td>
            <ul>
              <li>
                TSのネット検索→理解まで落とし込みの遅さ。<br />
                JSの情報量に対して理解度が足らず、TSに応用して実装できない機能が多々あった。<br />
                JSで可能だけどTSで不可能なのか、スキルが足りていないのか判断できず逆引き検索で時間を費やしてしまうこともあった。
              </li>
              <li>
                ブラウザ、〇系の対応差分。<br />
                ブラウザによって対応している/していないInput要素があるため、実装しなかった機能(日時表記と30分刻み）があった。<br />
                そもそもinput要素に頼らずコードで全ての日時情報選択ができればこの問題は発生しなかったが、<br />
                テキストで学んだベースの知識で応用できないか意見交換を重ねて乗り越えることもできた。<br />
                また、この書き方ができれば実装できそう、というところまで到達できた機能もあった（海外の日時情報の受け渡し）
              </li>
              <li>
                クラス図の重要性。<br />
                開発を始めた段階で必要なオブジェクトを構想していたつもりになっていた。<br />
                追加機能の実装を始めるとクラスに加筆修正、別クラスとの紐付けで開発しながらの軌道修正が多かった。<br />
                開発の前に全体図を意識して、どういう動きが想定されるのかきちんと全貌を掴むことが大事であると気がついた。
              </li>
              <li>
                デザインの重要性。<br />
                見た目より機能重視で開発を進めていたが、最後の３日間はレイアウトとcssを意識すると格段にクオリティが上がったように見えた。<br />
                最初から凝りすぎるより基本機能が実装できたらCSSに注力し、
                <br />そこから追加機能を実装するとモチベーションを維持したまま開発に進めるのだと気がついた。
              </li>
            </ul>
          </td>
        </tr>
        <tr class="improve">
          <td>反省点</td>
          <td>
            <ul>
              <li>
                初動での全体設計。クラスの把握。機能間の連携を意識した変数<br />
                加筆修正が多くgit開発でのmergeでconflictが発生するなどマイナートラブルが多かった。
              </li>
              <li>
                実装期間の意識。<br />
                開発する時間と逆引きする時間、インプット時間の区切りをきちんと付けなかったため<br />
                日中の6割検索、２割相談、２割コードを書くようなスケジュールになっていたこともあった。<br />
              </li>
            </ul>
          </td>
        </tr>
        <tr class="nextAction">
          <td>次に直すところ</td>
          <td>
            <ul>
              <li>
                カレンダー表記。<br />
                セレクトではなくカレンダーの実装を行い、候補を3日以上出せるようにする。<br />
                ボタン機能まで実装できたけれど日付を自動取得できずにベタ打ちのため3月のみ調整できる使用になっているので、そこも直す。<br />
                GoogleのカレンダーAPIがあるので日時をそこから取得するなど試行錯誤をしてみる。
              </li>
              <li>
                日にちと時間の同時表記をDate型で取得<br />
                string型により時差調整をできなかったことからdateで再挑戦する。
              </li>
              <li>
                時間の縛り(30分刻み等)<br />
                カレンダー表記の実現により縛りを設けて実装できる機能だと思っているので挑戦したい。<br />
                chrome,Edge,Firefoxは対応していないstep=1800のためそこの挙動確認をしたい
              </li>
              <li>
                回答選択肢の分岐<br />
                回答の選択肢に応じて回答者の項目が分岐する仕様に設計していなかったため、次回3系で作り直すのであればそのように対応する。<br />
                パスワード設定も行なっているため、そこの不一致では画面表示させないページも欲しい
              </li>
              <li>
                海外時間の自動計算<br />
                手入力になっているため、そこを自動計算にDate型を取得することで対応したい
              </li>
              <li>
                デザイン意識<br />
                Tailwindもしくはvueにbootstrapを導入したデザインに挑戦。簡略的なデザイン勉強にも活用
              </li>
            </ul>
          </td>
        </tr>
        <tr class="others">
          <td>その他</td>
          <td>
            <ul>
              <li>言語: Typescript</li>
              <li>フレームワーク:Vue 2系</li>
              <li>Vuetify</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped>
.feedback {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.function {
  text-align: left;
}
.notFunction {
  text-align: left;
}
.learning {
  text-align: left;
}

.leftcol {
  border: 150px;
  text-align: top;
  vertical-align: top;
}
</style>
