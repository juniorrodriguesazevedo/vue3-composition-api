import { createRouter, createWebHistory } from 'vue-router'
import MovieIndex from '../views/Movies/MovieIndex.vue'
import MovieCreate from '../views/Movies/MovieCreate.vue'

const routes = [
  {
    path: '/',
    name: 'movie.index',
    component: MovieIndex
  },
  {
    path: '/criar',
    name: 'movie.create',
    component: MovieCreate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
