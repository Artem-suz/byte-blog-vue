import { createRouter, createWebHistory } from 'vue-router'
import routes from './config'
import { app } from '../core'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
