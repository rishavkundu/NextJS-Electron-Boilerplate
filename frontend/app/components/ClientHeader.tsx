'use client';

import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Header } = Layout;

const ClientHeader = () => {
  return (
    <Header style={{ borderLeft: '1px solid #f5f5f5', background: '#001528', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
      <div>
        {/* Placeholder for toolbar icons */}
      </div>
      <div>
        {/* Placeholder for time */}
      </div>
    </Header>
  );
};

export default ClientHeader;