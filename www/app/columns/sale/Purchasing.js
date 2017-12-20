import React, { Component } from 'react';
import App from "../../App";
import SaleLayout from './SaleLayout';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

export default class Purchasing extends Component {
  render() {
    return (
      <App>
        <SaleLayout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>商品管理</Breadcrumb.Item>
            <Breadcrumb.Item>商品信息</Breadcrumb.Item>
            <Breadcrumb.Item>采购信息</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <h1>我是采购信息</h1>
            </Content>
          </Layout>
        </SaleLayout>
      </App>
    )
  }
}
