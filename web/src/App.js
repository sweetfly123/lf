import React, {useEffect} from 'react';
import { Layout, Menu, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  Link,
  useLocation,
  Switch,useHistory
} from "react-router-dom";
import { routes, RouteWithSubRoutes } from './routes/routes';
import {login} from './router/find-service/request';
const { Header, Content, Footer } = Layout;
const logo = {
  width: "120px",
  height: "31px",
  background: "white",
  margin: "16px 24px 16px 0",
  float: "left"
}



function App() {
  // useEffect(() => {
  //   login({username:'admin',password:'123'}).then(res => {
  //     console.log(res);
  //     sessionStorage.setItem('tokenId', res.data.data.accessToken)
  //   }).catch(error => message.error(error, 2.0));
  // }, sessionStorage.getItem("tokenId"))

  const history = useHistory();
  const toNavigate=(path)=>{
    history.push(path)
  }
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
          <Menu.Item key={"/service"} onClick={() => toNavigate("/service")}>
            找服务
          </Menu.Item>
          <Menu.Item key="/experts" onClick={() => toNavigate("/experts")}>
            找专家
          </Menu.Item>
          <Menu.Item key="/business" onClick={() => toNavigate("/business")}>
            招商
          </Menu.Item>
          <Button shape="circle" style={{ float: "right", marginTop: "18px", marginRight: "120px" }}>
            <UserOutlined />
          </Button>
        </Menu>
      </Header>
      <Content style={{ padding: '0 100px', marginTop: '100px', height: 'fit-content' }}>
        <div style={{ background: '#fff', padding: '65px', height: 'inherit' }}>
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
