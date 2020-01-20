import Vue from "vue"
import VueRouter from "vue-router"


import Home from "./pages/home.vue"
import Index from "./pages/index.vue"
import Product from "./pages/product.vue"
import Detail from "./pages/detail.vue"
import Cart from "./pages/cart.vue"
import Oder from "./pages/oder.vue"
import OderList from "./pages/oderList.vue"
import OderConifrm from "./pages/oderConfirm.vue"
import OderPay from "./pages/oderPay.vue"
import Alipay from "./pages/alipay.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home,
    redirect: "/index",
    children:[
      {
        path: "index",
        component: Index
      },
      {
        path: "product/:id",
        component: Product
      },
      {
        path: "detail/:id",
        component: Detail
      }
    ]
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/oder",
    component: Oder,
    children:[
      {
        path: "list",
        component: OderList
      },
      {
        path: "confirm",
        component: OderConifrm
      },
      {
        path: "pay",
        component: OderPay
      },
      {
        path: "alipay",
        component:Alipay
      }
    ]
  }
]

export default new VueRouter({
  routes,
  mode:"history"
})