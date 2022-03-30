<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/event">イベントを作る</router-link> |
      <router-link to="/eventConfirm">イベントを作成しますか</router-link> |
      <router-link to="/answerQuestions">回答者遷移ページ</router-link> |
      <router-link to="/answerFinished">回答完了</router-link> |
      <router-link to="/kanako">感想(矢野)</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(255, 221, 177);
  /* CSSの謎の余白を削除 */
  margin: calc(-50vw + 50%);
  height: auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
