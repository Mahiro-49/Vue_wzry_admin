import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

const CategoryEdit = () => import('../views/CategoryEdit.vue')
const CategoryList = () => import('../views/CategoryList.vue')

const ItemEdit = () => import('../views/ItemEdit.vue')
const ItemList = () => import('../views/ItemList.vue')

const HeroEdit = () => import('../views/HeroEdit.vue')
const HeroList = () => import('../views/HeroList.vue')

const ArticleEdit = () => import('../views/ArticleEdit.vue')
const ArticleList = () => import('../views/ArticleList.vue')

const AdEdit = () => import('../views/AdEdit.vue')
const AdList = () => import('../views/AdList.vue')

const AdminEdit = () => import('../views/AdminEdit.vue')
const AdminList = () => import('../views/AdminList.vue')

const Login = () => import('../views/Login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { isPublic: true }
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: CategoryEdit
      },
      {
        path: '/categories/list',
        component: CategoryList
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true  //将 :id 直接注入CategoryEdit组件中
      },


      {
        path: '/items/create',
        component: ItemEdit
      },
      {
        path: '/items/list',
        component: ItemList
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true
      },

      {
        path: '/heros/create',
        component: HeroEdit
      },
      {
        path: '/heros/list',
        component: HeroList
      },
      {
        path: '/heros/edit/:id',
        component: HeroEdit,
        props: true
      },

      {
        path: '/articles/create',
        component: ArticleEdit
      },
      {
        path: '/articles/list',
        component: ArticleList
      },
      {
        path: '/articles/edit/:id',
        component: ArticleEdit,
        props: true
      },

      {
        path: '/ads/create',
        component: AdEdit
      },
      {
        path: '/ads/list',
        component: AdList
      },
      {
        path: '/ads/edit/:id',
        component: AdEdit,
        props: true
      },

      {
        path: '/admin_users/create',
        component: AdminEdit
      },
      {
        path: '/admin_users/list',
        component: AdminList
      },
      {
        path: '/admin_users/edit/:id',
        component: AdminEdit,
        props: true
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})

export default router
