'use client';

import React from 'react';
import { Breadcrumb } from 'antd';

const ClientBreadcrumb = () => {
  return (
    <Breadcrumb style={{ margin: '8px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default ClientBreadcrumb;