import React, { Component } from 'react';
import App from "../../App";
import SaleLayout from './SaleLayout';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

export default class Insurance extends Component {
  render() {
    return (
      <App>
        <SaleLayout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>商品管理</Breadcrumb.Item>
              <Breadcrumb.Item>保险业务</Breadcrumb.Item>
              <Breadcrumb.Item>保险清单</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <h1>我是保险清单</h1>
            </Content>
          </Layout>
        </SaleLayout>
      </App>
    )
  }
}
