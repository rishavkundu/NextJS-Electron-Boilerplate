'use client';

import React, { useState, useEffect } from 'react';
import { Layout, theme } from 'antd';
import Sidebar from './Sidebar';

const { Header, Sider, Content } = Layout;

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="dark"
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Sider>
      <Layout>
        <Header style={{ background: '#001529', padding: '0 16px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>User / Bill</div>
          <div>{currentTime}</div>
        </Header>
        <Content style={{ margin: '16px', padding: '24px', background: colorBgContainer, borderRadius: borderRadiusLG }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ClientLayout;