import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import { Link } from 'dva/router';

export default class SaleLayout extends Component {
    render() {

        var match = window.location.hash.match(/^\#\/sale\/(.+)\/?$/);
        if (match) {
            var hash = match[1];
        } else {
            var hash = ""
        }

        return (
            <div>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[hash]}
                            defaultOpenKeys={['sub1', 'sub2']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="laptop" />商品信息</span>}>
                                <Menu.Item key="details"><Link to="/sale/details">详细信息</Link></Menu.Item>
                                <Menu.Item key="purchasing"><Link to="/sale/purchasing">采购信息</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />保险业务</span>}>
                                <Menu.Item key="insurance"><Link to="/sale/insurance">保险清单</Link></Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    {this.props.children}
                </Layout>
            </div>
        )
    }
}
