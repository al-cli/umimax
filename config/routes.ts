export const routes = [
  { path: '/login', component: '@/pages/Login' },
  {
    path: '/',
    // component: '@/layouts/index',
    // wrappers: ['@/pages/PrivateRoute'],
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        name: '首页',
        path: '/home',
        component: '@/pages/Home',
      },
      /* {
        path: '/home',
        name: '管理页',
        component: '@/pages/Home',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            component: '@/pages/Home',
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            component: '@/pages/Home',
          },
          {
            path: '/admin/sub-page3',
            name: '三级页面',
            component: '@/pages/Home',
          },
        ],
      }, */
    ],
  },
];
