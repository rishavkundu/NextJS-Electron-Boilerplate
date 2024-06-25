'use client';

import React, { useState } from 'react';
import { Layout, Breadcrumb, theme } from 'antd';
import Sidebar from './Sidebar';

const { Header, Content, Footer } = Layout;

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar theme="dark" collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()} Rishav Kundu
        </Footer>
      </Layout>
    </Layout>
  );
};

export default ClientLayout;
