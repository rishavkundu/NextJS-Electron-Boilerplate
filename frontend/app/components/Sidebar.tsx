'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, Layout } from 'antd';
import { 
  HomeOutlined, SoundOutlined, SettingOutlined, DashboardOutlined, 
  LineChartOutlined, CodeOutlined, FileOutlined, PieChartOutlined
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import AniLogo from './AniLogo';

const { Sider } = Layout;

interface SidebarProps {
  theme?: 'light' | 'dark';
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

interface SidebarProps {
  theme?: 'light' | 'dark';
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ theme = 'dark', collapsed, setCollapsed }) => {
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items: MenuProps['items'] = [
    { label: <Link href="/">Home</Link>, key: 'home', icon: <HomeOutlined /> },
    { label: <Link href="/dashboard">Dashboard</Link>, key: 'dashboard', icon: <DashboardOutlined /> },
    { label: <Link href="/analytics">Analytics</Link>, key: 'analytics', icon: <PieChartOutlined /> },
    { label: <Link href="/graph">Microsoft Graph</Link>, key: 'graph', icon: <LineChartOutlined /> },
    { label: <Link href="/groq">Groq Engine</Link>, key: 'engine', icon: <CodeOutlined /> },
    { label: <Link href="/inference">Chat Inference</Link>, key: 'inference', icon: <CodeOutlined /> },
    { label: <Link href="/speech">Azure Speech</Link>, key: 'speech', icon: <SoundOutlined /> },
    { 
      label: 'Documents', 
      key: 'documents', 
      icon: <FileOutlined />,
      children: [
        { label: <Link href="/documents/files">Files</Link>, key: 'files' },
        { label: <Link href="/documents/shared">Shared</Link>, key: 'shared' },
      ]
    },
    { label: <Link href="/settings">Settings</Link>, key: 'settings', icon: <SettingOutlined /> },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      width={200}
      style={{ background: theme === 'dark' ? '#001529' : '#fff' }}
    >
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <div onClick={toggleCollapsed} style={{ cursor: 'pointer' }}>
          <AniLogo />
        </div>
      </div>
      <Menu
        defaultSelectedKeys={['home']}
        mode="inline"
        theme={theme}
        inlineCollapsed={collapsed}
        items={items}
        style={{ height: '100%', borderRight: 0 }}
      />
    </Sider>
  );
};

export default Sidebar;
