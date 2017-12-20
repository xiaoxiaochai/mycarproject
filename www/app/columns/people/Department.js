import React, { Component } from 'react';
import App from "../../App";
import PeopleLayout from './PeopleLayout';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

export default class Department extends Component {
  render() {
    return (
      <App>
        <PeopleLayout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>人员管理</Breadcrumb.Item>
              <Breadcrumb.Item>部门信息</Breadcrumb.Item>
              <Breadcrumb.Item>人员信息</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <h1>我是人员信息</h1>
            </Content>
          </Layout>
        </PeopleLayout>
      </App>
    )
  }
}
