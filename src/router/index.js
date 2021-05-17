import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes = [{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/login/index'),
  hidden: true
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
