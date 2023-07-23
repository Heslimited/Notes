import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '../pages/mainPage.vue'
import loginPage from '../pages/loginPage.vue'
import regPage from '../pages/regPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Main', 
        component: mainPage,
        alias: '/'
    },
    {
        path: '/reg',
        name: 'Registration', 
        component: regPage
    },
    {
        path: '/login',
        name: 'Login', 
        component: loginPage
    }
  ]
})

export default router
 