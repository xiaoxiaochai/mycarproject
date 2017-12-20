import React, { Component } from 'react';
import App from "../../App";
import OrderLayout from './OrderLayout';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

export default class Customer extends Component {
  render() {
    return (
      <App>
        <OrderLayout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>订单管理</Breadcrumb.Item>
              <Breadcrumb.Item>客户信息</Breadcrumb.Item>
              <Breadcrumb.Item>客户列表</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <h1>我是客户列表</h1>
            </Content>
          </Layout>
        </OrderLayout>
      </App>
    )
  }
}
