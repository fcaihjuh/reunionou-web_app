import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component:()=> import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inscription.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Connexion.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue')
  },
  {
    path: '/creerevenement',
    name: 'CreerEvenement',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreerEvenement.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router