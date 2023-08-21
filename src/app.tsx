/*
 * @Author: ao-lie lie.ao@firesoon.com
 * @Date: 2023-06-19 11:05:57
 * @LastEditors: ao-lie lie.ao@firesoon.com
 * @LastEditTime: 2023-06-21 16:59:16
 * @FilePath: \umimax\src\app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 运行时配置
import { RunTimeLayoutConfig } from '@umijs/max';

interface initialState {
  name: string;
  logout: React.ReactNode;
  rightRender?: React.ReactNode;
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<initialState> {
  return {
    name: '工程作业平台',
    logout: `<div>退出登录</div>`,
    // rightRender: <Header />,
  };
}

export const layout: RunTimeLayoutConfig = (initialState) => {
  return {
    // 常用属性
    title: '工程作业平台',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },

    // 默认布局调整
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
    navTheme: 'light',
    contentWidth: 'Fluid',
    colorPrimary: '#1677FF',
    siderMenuType: 'sub',
    fixedHeader: true,
    rightContentRender: () => <div>123</div>,
    headerContentRender: () => <div>headerContentRender</div>,
    menuRender: () => <span>menuRender</span>,
    // menuHeaderRender: () => <span>menuRender</span>,
    // headerRender: () => <span>headerRender</span>,

    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
  };
};
