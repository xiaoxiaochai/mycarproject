import React, { Component } from 'react';
import App from "../../App";
import OrderLayout from './OrderLayout';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

export default class OrderList extends Component {
  render() {
    return (
      <App>
        <OrderLayout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>订单管理</Breadcrumb.Item>
              <Breadcrumb.Item>订单信息</Breadcrumb.Item>
              <Breadcrumb.Item>订单列表</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <h1>我是订单列表</h1>
            </Content>
          </Layout>
        </OrderLayout>
      </App>
    )
  }
}
