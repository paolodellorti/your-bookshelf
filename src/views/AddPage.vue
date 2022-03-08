<template>
  <header-partial @backHome="backHome" />
  <transition :name="'el-zoom-in-top'">
    <div class="main-container" v-show="show">
      <el-button :icon="Back" class="back" @click="goBack" circle></el-button>

      <h1><span>A</span>dd <span>B</span>ook</h1>

      <main-form :isFormActive="true" @buttonClick="addBook" />
    </div>
  </transition>
</template>

<script>
import HeaderPartial from './partials/HeaderPartial.vue'
import MainForm from '../components/MainForm.vue'
import { ElNotification } from 'element-plus'

export default {
  name: 'AddPage',
  components: {
    HeaderPartial,
    MainForm
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    backHome() {
      this.show = false
      setTimeout(() => this.$router.push({ name: 'LoginPage' }), 300)
    },
    goBack() {
      this.show = false
      setTimeout(() => this.$router.go(-1), 300)
    },
    addBook() {
      ElNotification({
        title: 'Success',
        message: 'Added successfully',
        type: 'success',
        duration: 3000
      })
      this.show = false
      setTimeout(() => this.$router.push({ name: 'BooksPage', params: { userId: this.$route.params.userId }}), 300)
    },
    mounted() {
      setTimeout(() => this.show = true, 300)
    }
  }
}
</script>

<script setup>
import { Back } from '@element-plus/icons-vue'
</script>

<style scoped>
.controller {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  font-family: 'Sansita Swashed', cursive;
}
</style>