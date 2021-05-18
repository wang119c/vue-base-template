import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes = [{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/login/index'),
  hidden: true
}, {
  path: '/404',
  component: () => import(/* webpackChunkName: "error-page" */ '../views/error-page/404'),
  hidden: true
}, {
  path: '/401',
  component: () => import('@/views/error-page/401'),
  hidden: true
}, {
  path: '/'
  // component: Layout
}]
const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()

export function resetRouter () {
  // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465  参考文档
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
