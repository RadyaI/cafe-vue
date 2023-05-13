import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AdminHome from '../views/Admin/AdminHome.vue'
import ManageUser from '../views/Admin/ManageUser.vue'
import ManageMenu from '../views/Admin/ManageMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    component: AdminHome
  },
  {
    path: '/manageuser',
    component: ManageUser
  },
  {
    path: '/managemenu',
    component: ManageMenu
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
