<template>
  <header-partial @backHome="backHome" />
  <transition :name="'el-zoom-in-top'">
    <div class="main-container" v-show="show">
      <el-button :icon="Back" class="back" @click="goBack" circle></el-button>

      <h1><span>E</span>dit <span>B</span>ook</h1>
      <div class="controller">
          <div>
            <span class="edit">Edit</span>
            <el-switch
              v-model="isFormActive"
              class="mt-2"
              style="margin-left: 24px"
              inline-prompt
              active-color="#77B3D4"
              :active-icon="Check"
              :inactive-icon="Close"
            >
            </el-switch>
          </div>
          <el-popconfirm
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            :icon="InfoFilled"
            icon-color="red"
            title="Are you sure to delete this?"
            @confirm="deleteBook"
          >
            <template #reference>
              <el-button type="danger" :icon="Delete" size="small">Delete</el-button>
            </template>
          </el-popconfirm>
      </div>
      <main-form :book="book" v-if="Object.keys(book).length" :isFormActive="isFormActive" @buttonClick="editBook" />
    </div>
  </transition>
</template>

<script>
import HeaderPartial from './partials/HeaderPartial.vue'
import MainForm from '../components/MainForm.vue'
import axios from 'axios'
import { ElNotification } from 'element-plus'

export default {
  name: 'DetailPage',
  components: {
    HeaderPartial,
    MainForm
  },
  data() {
    return {
      book: {},
      isFormActive: false,
      show: false
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
    deleteBook() {
      ElNotification({
        title: 'Success',
        message: 'Deleted successfully',
        type: 'success',
        duration: 3000
      })
      this.show = false
      setTimeout(() => this.$router.push({ name: 'BooksPage', params: { userId: this.$route.params.userId }}), 300)
    },
    editBook() {
      ElNotification({
        title: 'Success',
        message: 'Edited successfully',
        type: 'success',
        duration: 3000
      })
      this.show = false
      setTimeout(() => this.$router.push({ name: 'BooksPage', params: { userId: this.$route.params.userId }}), 300)
    }
  },
  mounted() {
    axios.get('db.json')
      .then(res => {
        const books = [ ...res.data[this.$route.params.userId].books ]
        this.book = { ...books.find(book => book.id == this.$route.params.bookId) }
        this.show = true
      })
      .catch(err => console.log(err))
  }
}
</script>

<script setup>
import { Check, Close, Delete, InfoFilled, Back } from '@element-plus/icons-vue'
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
.mt-2 {
  margin-left: 5px !important;

}
.edit {
  font-size: 0.8rem;
}
</style>