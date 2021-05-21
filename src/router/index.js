import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch((err) => err)
}

export const constantRoutes = [
  {
    path: '/redirect/:path(.*)',
    component: () => import('@/views/redirect/index'),
    hidden: true,
    name: 'redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  }, {
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
  }, {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: {
          title: 'Documentation',
          icon: 'documentation',
          affix: true
        }
      }
    ]
  }, {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: {
          title: 'Guide',
          icon: 'guide',
          noCache: true
        }
      }
    ]
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
      roles: ['admin', 'editor'] // or you can only set roles in sub nav
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
      roles: ['admin', 'editor']
    }
  }]
}, {
  path: '/icon',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/icons/index'),
      name: 'Icons',
      meta: {
        title: 'Icons',
        icon: 'icon',
        noCache: true
      }
    }
  ]
}, {
  path: '/tab',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/tab/index'),
      name: 'Tab',
      meta: {
        title: 'Tab',
        icon: 'tab'
      }
    }
  ]
}, {
  path: '/error',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ErrorPages',
  meta: {
    title: 'Error Pages',
    icon: '404'
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/error-page/401'),
      name: 'Page401',
      meta: { title: '401', noCache: true }
    },
    {
      path: '404',
      component: () => import('@/views/error-page/404'),
      name: 'Page404',
      meta: { title: '404', noCache: true }
    }
  ]
},

{
  path: '/error-log',
  component: Layout,
  children: [
    {
      path: 'log',
      component: () => import('@/views/error-log/index'),
      name: 'ErrorLog',
      meta: { title: 'Error Log', icon: 'bug' }
    }
  ]
},

{
  path: '/excel',
  component: Layout,
  redirect: '/excel/export-excel',
  name: 'Excel',
  meta: {
    title: 'Excel',
    icon: 'excel'
  },
  children: [
    {
      path: 'export-excel',
      component: () => import('@/views/excel/export-excel'),
      name: 'ExportExcel',
      meta: { title: 'Export Excel' }
    },
    {
      path: 'export-selected-excel',
      component: () => import('@/views/excel/select-excel'),
      name: 'SelectExcel',
      meta: { title: 'Export Selected' }
    },
    {
      path: 'export-merge-header',
      component: () => import('@/views/excel/merge-header'),
      name: 'MergeHeader',
      meta: { title: 'Merge Header' }
    },
    {
      path: 'upload-excel',
      component: () => import('@/views/excel/upload-excel'),
      name: 'UploadExcel',
      meta: { title: 'Upload Excel' }
    }
  ]
},

{
  path: '/zip',
  component: Layout,
  redirect: '/zip/download',
  alwaysShow: true,
  name: 'Zip',
  meta: { title: 'Zip', icon: 'zip' },
  children: [
    {
      path: 'download',
      component: () => import('@/views/zip/index'),
      name: 'ExportZip',
      meta: { title: 'Export Zip' }
    }
  ]
},

{
  path: '/pdf',
  component: Layout,
  redirect: '/pdf/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/pdf/index'),
      name: 'PDF',
      meta: { title: 'PDF', icon: 'pdf' }
    }
  ]
},
{
  path: '/pdf/download',
  component: () => import('@/views/pdf/download'),
  hidden: true
},

{
  path: '/theme',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/theme/index'),
      name: 'Theme',
      meta: { title: 'Theme', icon: 'theme' }
    }
  ]
},

{
  path: '/clipboard',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/clipboard/index'),
      name: 'ClipboardDemo',
      meta: { title: 'Clipboard', icon: 'clipboard' }
    }
  ]
},

{
  path: 'external-link',
  component: Layout,
  children: [
    {
      path: 'https://github.com/PanJiaChen/vue-element-admin',
      meta: { title: 'External Link', icon: 'link' }
    }
  ]
},

// 404 page must be placed at the end !!!
{ path: '*', redirect: '/404', hidden: true }
]

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
