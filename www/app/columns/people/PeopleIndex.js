import React, { Component } from 'react'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import App from "../../App";
import PeopleLayout from './PeopleLayout';
 
export default class PeopleIndex extends Component {
     
    render() {
        return (
            <App>
                <PeopleLayout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>人员管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <h1>我是人员管理介绍</h1>
                        </Content>
                    </Layout>
                </PeopleLayout>
            </App>
        )
    }
}
