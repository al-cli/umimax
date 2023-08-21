/*
 * @Author: ao-lie lie.ao@firesoon.com
 * @Date: 2023-06-20 16:41:06
 * @LastEditors: ao-lie lie.ao@firesoon.com
 * @LastEditTime: 2023-06-25 10:54:23
 * @FilePath: \umimax\src\layouts123\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer,ProCard,ProLayout } from '@ant-design/pro-components';
import { Outlet,history,useLocation } from "@umijs/max";
import { useState } from 'react';
import defaultProps from './_defaultProps';
import  "./index.less";

export default () => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/admin/sub-page1');
  // const [pathname, setPathname] = useState('/welcome');
  // const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  const location = useLocation();
  console.log(location, 'location');
  if (location.pathname === '/login') {
    return <Outlet />;
  }

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              console.log(item, 'item');
              console.log(defaultProps, 'defaultProps');
              defaultProps.route.routes.map((item1) => {
                if (item1.path === item.path) {
                  console.log(1, '1');
                  history.push(item1?.routes[0]?.path);
                }
                // return false;
              });
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <div>asdasd</div>
          {/* <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard> */}
        </PageContainer>
      </ProLayout>
    </div>
  );
};
