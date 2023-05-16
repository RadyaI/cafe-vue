import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AdminHome from '../views/Admin/AdminHome.vue'
import ManageUser from '../views/Admin/ManageUser.vue'
import ManageMenu from '../views/Admin/ManageMenu.vue'
import ManageMeja from '../views/Admin/ManageMeja.vue'

import KasirHome from '../views/Kasir/KasirHome.vue'
import TransaksiPage from '../views/Kasir/TransaksiPage.vue'
import AddMenu from '../views/Kasir/AddMenu.vue'
import OnGoing from '../views/Kasir/OnGoing.vue'
import HistoryView from '../views/Kasir/HistoryView.vue'
import PrintNota from '../views/Kasir/PrintNota.vue'

import ManagerHome from '../views/Manager/ManagerHome.vue'
import AllTransaksi from '../views/Manager/AllTransaksi.vue'
import FilterTransaksi from '../views/Manager/FilterTransaksi.vue'
import ProfitPage from '../views/Manager/ProfitPage.vue'


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
  },
  {
    path: '/managetable',
    component: ManageMeja
  },
  {
    path: '/kasir',
    component: KasirHome
  },
  {
    path: '/transaksi',
    component: TransaksiPage
  },
  {
    path: '/addmenu',
    component: AddMenu
  },
  {
    path: '/ongoing',
    component: OnGoing
  },
  {
    path: '/history',
    component: HistoryView
  },
  {
    path: '/printnota/:id',
    component: PrintNota
  },
  {
    path: '/manager',
    component: ManagerHome
  },
  {
    path: '/alltransaction',
    component: AllTransaksi
  },
  {
    path: '/filtertransaction',
    component: FilterTransaksi
  },
  {
    path: '/profit',
    component: ProfitPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
