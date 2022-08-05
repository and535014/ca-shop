import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'
import ProductView from '../views/ProductView.vue'
import SearchView from '../views/SearchView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/browse/:cata',
    name: 'Browse',
    component: BrowseView,
    props: true
  }, {
    path: '/product/:id',
    name: 'product',
    component: ProductView,
    props: true
  }, {
    path: '/search/:keywords',
    name: 'search',
    component: SearchView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  
})

export default router
