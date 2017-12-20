import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider  } = Layout;

import { Link } from 'dva/router';

export default class PeopleLayout extends Component {
  render() {
      
    var match = window.location.hash.match(/^\#\/people\/(.+)\/?$/);
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
                        <SubMenu key="sub1" title={<span><Icon type="user" />部门信息</span>}>
                            <Menu.Item key="department"><Link to="/people/department">人员信息</Link></Menu.Item>
                        </SubMenu>
                      
                    </Menu>
                </Sider>
                {this.props.children}
            </Layout>
      </div>
    )
  }
}
