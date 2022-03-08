<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Sansita+Swashed:wght@500&display=swap');
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB','Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4F5D73;
  max-width: 600px;
  margin: 0 auto;
}
h1 span,
h4 span {
  color: #77B3D4;
}
.main-container {
  margin-top: 90px;
  position: relative;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
