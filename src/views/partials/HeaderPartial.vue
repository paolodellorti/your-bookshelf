<template>
  <div class="header">
    <div class="header-child">
      <div class="user-info">
        <el-avatar src='https://waldinadotcom.files.wordpress.com/2012/01/james-dean.jpg' />
        <h4>James D.</h4>
      </div>
      <div class="logo" @click="$emit('backHome')">
        <h4><span>Y</span>our <span>B</span>ookshelf</h4>
        <img alt="Your Bookshelf logo" src="@/assets/logo.png" class="logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPartial'
}
</script>

<style scoped>
  .header {
    height: 70px;
    width: 100vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 99;
  }
  .header-child {
    width: 580px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Sansita Swashed', cursive;
    cursor: pointer;
  }
  h4 {
    margin: 0 10px;
  }
  img {
    width: 40px;
  }
</style>