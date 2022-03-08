<template>
  <transition :name="'el-zoom-in-top'">
      <div class="login-page"  v-show="show">

        <img alt="Your Bookshelf logo" src="../assets/logo.png" class="logo">

        <h1><span>Y</span>our <span>B</span>ookshelf</h1>

        <login-form @login="login" />
        
      </div>
  </transition>
</template>

<script>
import LoginForm from '../components/login/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    login() {
      this.show = false
      setTimeout(() => this.$router.push({ name: 'BooksPage', params: { userId: 5056407 }}), 300)
    }
  },
  mounted() {
    setTimeout(() => this.show = true, 300)
  }
}
</script>

<style scoped>
h1 {
 font-family: 'Sansita Swashed', cursive;
}
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
}
.logo {
  margin-top: clamp(15px, 20px, 50px);
}
</style>
