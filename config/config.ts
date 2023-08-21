/*
 * @Author: ao-lie lie.ao@firesoon.com
 * @Date: 2023-06-19 11:00:03
 * @LastEditors: ao-lie lie.ao@firesoon.com
 * @LastEditTime: 2023-06-21 15:02:21
 * @FilePath: \umimax\.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineConfig } from '@umijs/max';

import { routes } from './routes';
import { theme } from './theme';

// console.log(theme,'theme');

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva: {},
  qiankun: {
    master: {},
  },
  layout: {
    title: '工程作业平台',
  },
  routes: routes,
  theme: theme,
  npmClient: 'yarn',
});
