import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider  } = Layout;

import { Link } from 'dva/router';

export default class IndexLayout extends Component {
  render() {
      
    var match = window.location.hash.match(/^\#\/(.+)\/?$/);
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
                        <SubMenu key="sub1" title={<span><Icon type="laptop" />首页</span>}>
                            
                            <Menu.Item key="salecharts"><Link to="/salecharts">销量图表</Link></Menu.Item>
                            <Menu.Item key="evaluation"><Link to="/evaluation">人员考评</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                {this.props.children}
            </Layout>
      </div>
    )
  }
}
