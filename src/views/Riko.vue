<template>
  <div class="block">
    <h1>感想（吉田）</h1>
    <table border="1" align="center">
      <tr>
        <div>
          <h2>担当機能</h2>
          <div>
            <div>・回答者遷移ページ</div>
            <div>・回答完了ページ</div>
            <div>・サイト全体のデザイン</div>
          </div>
        </div>
      </tr>
      <tr>
        <h2>工夫した点</h2>
        <div class="item">
          <div class="title">・テーブルなどを使って見やすさを意識した</div>
          <div class="title">・分かりにくい箇所はTSDocコメントを書くようにした</div>
        </div>
      </tr>
      <tr>
        <h2>苦労した点</h2>
        <div class="item">
          <div class="title">・回答者遷移ページのコンポーネント</div>
          <div>
            PropやEmitを使って親から子、子から親に情報を受け渡す方法が難しかった。テキストで習った内容を応用するような形だったため、工数が多くかかった。
          </div>
        </div>
        <div class="item">
          <div class="title">・回答完了ページのテーブル</div>
          <div>
            Emitを使って回答された〇のカウント数をテーブルに表示させたり、回答したユーザー情報（ユーザー名とセレクトボックスの値、コメントなど）を表示させたりするのが難しかった。普通に表示させるならそこまで難しいと感じなかったかもしれないが、テーブル×for文の組み合わせだったからだと思っている。
          </div>
        </div>
        <div class="item">
          <div class="title">・注釈のテーブル表示</div>
          <div>
            回答者遷移ページにて選択された都市の日時を表示する欄を設けている。最初テーブルで表示させようとしたが、テーブル×for文が上手く嚙み合わず、CSSのフレックスボックスなどを使って実現させた。
          </div>
        </div>
      </tr>
      <tr>
        <h2>今後の課題（実装を諦めたところ）</h2>
        <div class="item">
          <div class="title">・セレクトボックスの値をセットする</div>
          <div>
            一度回答したものを編集したいとなったとき、編集画面にて過去に選択されたセレクトボックスの値をセットする方法がわからなかった。
          </div>
        </div>
        <div class="item">
          <div class="title">・セレクトボックス変更時のバグ</div>
          <div>
            回答者遷移ページの画面内（登録するを押す前）で、セレクトボックスの値を何度か変更すると、回答完了ページのテーブルにてカウント数にバグが生じてしまう。
            解決方法はわからなかった。
          </div>
        </div>
        <div class="item">
          <div class="title">・クラスの構成</div>
          <div>
            今回のチーム開発で一番の課題と言ってもいいかもしれない。基本機能の実装時点では問題なかったが、実装していくにつれて、この書き方だと上手くいかないことがあり、何度かクラスを大幅に変更した。それが原因で実装を諦めてしまった機能もあったため、次回の開発ではクラスの構成をチームで考えて議論する時間を多く取るべきだと思った。
          </div>
        </div>
        <div class="item">
          <div class="title">・おすすめを表示するメッセージ</div>
          <div>
            日本の日時は適切でも、時差の関係で海外の日時が適切では無い時にアラートを出したり、「おすすめは第〇候補です」というメッセージを出したりのを実装したかった。
            これもクラスの構成と関係してくるのだが、日時をstring型で設定したために思うように行かず、実現することが難しかった。
          </div>
        </div>
      </tr>
      <tr>
        <h2>所感</h2>
        <div class="item">
          <div class="title">・日程調整アプリは想像”異常”に難しい</div>
          <div>
            研修のテキスト内容が全て詰め込まれたような印象だった。研修の復習にもなったし、それを応用する考え方もかなり身についたのではないかと思っている。ただ、研修のECサイト以上に上手くいかなかったところが多く、実装を諦めてしまった機能もいくつかある。納期まで約3週間を設けたが、自分たちの中ではかなり余裕を持って設定したつもりだった。基本機能までは割とスムーズだったが、追加機能で幾度どなく壁にぶつかり、納期ギリギリでのゴールとなった。
          </div>
        </div>
        <div class="item">
          <div class="title">・Vue3でリプレイスを目指す</div>
          <div>
            Vue2での実装は一旦おいて、今後はVue3で作り直すことを考えている。実装を諦めた機能を、Vue3で実現できるといいなと思う。
          </div>
        </div>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped>
.block {
  width: 100%;
  height: auto;
  font-family: "Yu Gothic", "Noto Sans JP", sans-serif;
}

h2 {
  font-size: 20px;
}

table {
  width: 900px;
  padding: 40px;
  border-radius: 10px;
  background-color: white;
  text-align: left;
}

.title {
  font-weight: bold;
}

.item {
  margin-bottom: 20px;
}
</style>
