import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import BooksPage from '../views/BooksPage.vue'
import DetailPage from '../views/DetailPage.vue'
import AddPage from '../views/AddPage.vue'

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/books/:userId',
    name: 'BooksPage',
    component: BooksPage
  },
  {
    path: '/books/:userId/detail/:bookId',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/books/:userId/add',
    name: 'AddPage',
    component: AddPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
