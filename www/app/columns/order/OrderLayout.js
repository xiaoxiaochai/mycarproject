import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider  } = Layout;

import { Link } from 'dva/router';

export default class OrderLayout extends Component {
  render() {
      
    var match = window.location.hash.match(/^\#\/order\/(.+)\/?$/);
      if (match){
          var hash = match[1];
      }else{
          var hash = ""
      }

    return (
      <div>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[hash]}
                        defaultOpenKeys={['sub1','sub2']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="laptop" />订单信息</span>}>
                            <Menu.Item key="orderList"><Link to="/order/orderList">订单列表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title={<span><Icon type="laptop" />客户信息</span>}>
                            <Menu.Item key="customer"><Link to="/order/customer ">客户列表</Link></Menu.Item>
                        </SubMenu>
                      
                    </Menu>
                </Sider>
                {this.props.children}
            </Layout>
      </div>
    )
  }
}
