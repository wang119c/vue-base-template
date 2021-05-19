import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => err)
}

export const constantRoutes = [{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/login/index'),
  hidden: true
}, {
  path: '/404',
  component: () => import(/* webpackChunkName: "error-page" */ '@/views/error-page/404'),
  hidden: true
}, {
  path: '/401',
  component: () => import(/* webpackChunkName: "error-page" */ '@/views/error-page/401'),
  hidden: true
}, {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'dashboard',
      affix: true
    }
  }]
}]

export const asyncRoutes = [{
  path: '/permission',
  component: Layout,
  redirect: '/permission/page',
  alwaysShow: true,
  name: 'Permission',
  meta: {
    title: 'Permission',
    icon: 'lock',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [{
    path: 'page',
    component: () => import('@/views/permission/page'),
    name: 'PagePermission',
    meta: {
      title: 'Page Permission',
      roles: ['admin'] // or you can only set roles in sub nav
    }
  }, {
    path: 'directive',
    component: () => import('@/views/permission/directive'),
    name: 'DirectivePermission',
    meta: {
      title: 'Directive Permission'
    }
  }, {
    path: 'role',
    component: () => import('@/views/permission/role'),
    name: 'RolePermission',
    meta: {
      title: 'Role Permission',
      roles: ['admin']
    }
  }]
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
