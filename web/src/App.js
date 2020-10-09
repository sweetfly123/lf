import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  Link,
  useLocation,
  Switch
} from "react-router-dom";
import { routes, RouteWithSubRoutes } from './routes/routes';

const { Header, Content, Footer } = Layout;
const logo = {
  width: "120px",
  height: "31px",
  background: "white",
  margin: "16px 24px 16px 0",
  float: "left"
}

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
        <div style={logo} />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[useLocation().pathname]}
          selectedKeys={[useLocation().pathname]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key={"/home"}>
            <Link to="/home">找服务</Link>
          </Menu.Item>
          <Menu.Item key="/experts">
            <Link to="/experts">找专家</Link>
          </Menu.Item>
          <Menu.Item key="/business">
            <Link to="/business">招商</Link>
          </Menu.Item>
          <Button shape="circle" style={{ float: "right", marginTop: "18px", marginRight: "120px" }}>
            <UserOutlined />
          </Button>
        </Menu>
      </Header>
      <Content style={{ padding: '0 100px', marginTop: '100px', height: 'fit-content' }}>
        <div style={{ background: '#fff', padding: 30, height: 'inherit' }}>
          <Switch>
            {
              routes.map(route => (
                <RouteWithSubRoutes key={route.key} {...route} />
              ))
            }
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Powered by React@16.13.1 and Ant Design@3.26.18</Footer>
    </Layout>
  )
}

export default App;
