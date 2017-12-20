import React, { Component } from 'react'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import App from "../../App";
import OrderLayout from './OrderLayout';
 
export default class OrderIndex extends Component {
     
    render() {
        return (
            <App>
                <OrderLayout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>订单管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <h1>我是订单管理介绍</h1>
                        </Content>
                    </Layout>
                </OrderLayout>
            </App>
        )
    }
}
