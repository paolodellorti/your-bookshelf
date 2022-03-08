<template>
  <div class="book-card">
    <div class="title">
      <h3>{{ book.title }}</h3>
      <h6><el-icon><user /></el-icon> {{ book.author }}, {{ book.year }}</h6>
      <h5><el-icon><reading /></el-icon> {{ book.readingCounter }} {{ book.readingCounter == 1 ? 'read' : 'reads' }}</h5>
    </div>
    <el-button type="primary" color="#77B3D4" :icon="ArrowRightBold" circle @click="$emit('goDetail')"></el-button>
    
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>


<script setup>
  import { ArrowRightBold, Reading, User } from '@element-plus/icons-vue'
</script>

<style scoped>
  .book-card {
    width: 80%;
    margin: 20px auto;
    border-left: 5px solid #77B3D4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
  .book-card:hover {
    background-color: #f1f1f1;
  }
  .title {
    display: flex;
    flex-direction: column; 
    justify-content: center;
  }
  h3 {
    font-family: 'Sansita Swashed', cursive;
  }
  h6 {
    color: #b9b9b9;
  }
  h3, h5, h6 {
    margin: 5px 10px;
    text-align: left;
  }
</style>