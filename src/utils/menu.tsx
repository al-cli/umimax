/*
 * @Author: ao-lie lie.ao@firesoon.com
 * @Date: 2023-06-19 17:03:11
 * @LastEditors: ao-lie lie.ao@firesoon.com
 * @LastEditTime: 2023-06-21 09:43:08
 * @FilePath: \umimax\src\utils\menu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const routers = [
  {
    path: '/',
    redirect: '@/pages/home',
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: '@/pages/Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: '@/pages/Table',
  },
];