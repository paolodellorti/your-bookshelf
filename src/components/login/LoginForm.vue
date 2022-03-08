<template>
  <div class="login-form">
    <form>
        <div>
          <label>Email</label>
          <el-input 
            v-model="email" 
            size="large"
            class="input-width"
            pattern="[a-zA-Z]+"
            disabled 
          />
        </div>
        <div>
          <label>Password</label>
          <el-input 
            v-model="password"
            type="password"
            size="large"
            class="input-width"
            disabled
          />
        </div>
    </form>
    <slide-unlock
      ref="vueslideunlock"
      class="slide"
      :auto-width="false"
      :circle="true"
      :disabled="false"
      :noanimate="false"
      :width="300"
      :height="60"
      text="login"
      success-text="◯"
      @completed="swipeCompleted()"
    />
  </div>
</template>

<script>
import SlideUnlock from "vue-slide-unlock"

export default {
  name: 'LoginForm',
  components: {
    SlideUnlock
  },
  data() {
    return {
      email: 'james@dean.com',
      password: 'password'
    }
  },
  methods: {
    swipeCompleted() {
      setTimeout(() => this.$emit("login"), 500)
    }
  }
}
</script>

<style scoped>
  form {
    transform: translateX(-50px);
    margin-bottom: 50px;
  }
  label {
    display: inline-block;
    width: 150px;
    text-align: right;
    margin-right: 5px;
  }
  .input-width {
    width: 170px;
    margin-bottom: 10px;
  }
  .slide {
    margin-bottom: clamp(15px, 20px, 50px);
  }
</style>