<template>
  <header-partial @backHome="backHome()" />
  <transition :name="'el-zoom-in-top'">
    <div class='main-container' v-show="show">
      <h1><span>Y</span>our <span>B</span>ooks</h1>

      <div class="controller">
        <el-button color="#77B3D4" style="color: white" size="small" :icon="Plus" @click="goAdd">Add Book</el-button>

        <div class="radio-group">
          <span>order by</span>

          <el-radio-group v-model="sorting"  size="small" fill="#77B3D4">
            <el-radio-button label="title"></el-radio-button>
            <el-radio-button label="author"></el-radio-button>
            <el-radio-button label="year"></el-radio-button>
          </el-radio-group>

        </div>
      </div>

      <book-card v-for="book in books" :key="book.ISBN" :book="book" @goDetail="goDetail(book.id)" />
    
    </div>
  </transition>
</template>

<script>
import HeaderPartial from './partials/HeaderPartial.vue'
import BookCard from '../components/books/BookCard.vue'
import axios from 'axios'
import { sortBy } from 'lodash'

export default {
  name: 'BookPage',
  components: {
    HeaderPartial,
    BookCard
  },
  data() {
    return {
      books: [],
      show: false,
      sorting: 'title'
    }
  },
  methods: {
    backHome() {
      this.show = false
      setTimeout(() => this.$router.push({ name: 'LoginPage' }), 300)
    },
    goDetail(id) {
      this.show = false
      setTimeout(() => this.$router.push({ name: 'DetailPage', params: { userId: this.$route.params.userId, bookId: id } }), 300)
    },
    goAdd() {
      this.show = false
      setTimeout(() => this.$router.push({ name: 'AddPage', params: { userId: this.$route.params.userId } }), 300)
    }
  },
  watch: {
    sorting(filter) {
      this.books = [ ...sortBy(this.books, filter) ]
    }
  },
  mounted() {
    axios.get('db.json')
      .then(res => {
        this.books = [ ...res.data[this.$route.params.userId].books ]
        this.show = true
      })
      .catch(err => console.log(err))
  }
}
</script>

<script setup>
import { Plus } from '@element-plus/icons-vue'
</script>


<style scoped>
  h1 {
    font-family: 'Sansita Swashed', cursive;
  }
  .controller {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .radio-group {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .radio-group span {
    margin-right: 5px;
    font-size: 0.8rem;
    color: #b9b9b9;
  }
</style>