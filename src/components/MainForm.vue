<template>
  <el-form :disabled="!isFormActive" label-width="50px" class="form">

    <el-form-item label="Title">
      <el-input v-model="form.title" placeholder="..." clearable></el-input>
    </el-form-item>

    <el-form-item label="Author">
      <el-input v-model="form.author" placeholder="..." clearable></el-input>
    </el-form-item>

    <el-form-item label="Year">
      <el-date-picker v-model="form.year" type="year" placeholder="..."></el-date-picker>
    </el-form-item>

    <el-form-item label="Plot">
      <el-input
        v-model="form.plot"
        :autosize="{ minRows: 1, maxRows: 3 }"
        type="textarea"
        placeholder="..."
      >
      </el-input>
    </el-form-item>

    <el-form-item label="Reads">
      <el-input-number v-model="form.readingCounter" :min="1" />
    </el-form-item>

    <el-form-item label="ISBN">
      <el-input v-model="form.ISBN" maxlength="13" placeholder="..." />
    </el-form-item>
  </el-form>
  <el-button type="success" :icon="Check" class="button" :disabled="isButtonDisabled" @click="$emit('buttonClick')">Save</el-button>

</template>

<script>
export default {
  name: 'MainForm',
  props: {
    book: {
      type: Object
    },
    isFormActive: {
      type: Boolean
    }
  },
  data() {
    return {
      id: 0,
      addingDate: '',
      form: {
        title: '',
        author: '',
        year: 0,
        plot: '',
        readingCounter: 1,
        ISBN: ''
      }
    }
  },
  emits: [ 'buttonClick' ],
  mounted() {
    if (this.book) {
      this.id = this.book.id
      delete this.book.id
      this.addingDate = this.book.addingDate
      delete this.book.addingDate
      this.form = { ...this.book }
    }
  },
  computed: {
    isButtonDisabled() {
      if (!this.isFormActive) {
        return true
      } else {
        return ( !this.form.title || !this.form.author || !this.form.year || !this.form.plot || !this.form.readingCounter || !this.form.ISBN  )
      }
    }
  }
}
</script>

<script setup>
import { Check } from '@element-plus/icons-vue'
</script>

<style scoped>
  .form {
    border-left: 5px solid #77B3D4;
    padding: 10px 10px 5px 10px;
    max-width: 500px;
    margin: 10px auto;
  }
  .button {
    position: absolute;
    right: 40px;
  }
</style>