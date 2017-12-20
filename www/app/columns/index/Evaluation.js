import React, { Component } from 'react';
import App from "../../App";
import IndexLayout from './IndexLayout';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

export default class Evaluation extends Component {
  render() {
    return (
      <App>
        <IndexLayout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>人员考核</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <h1>我是人员考核</h1>
            </Content>
          </Layout>
        </IndexLayout>
      </App>
    )
  }
}
