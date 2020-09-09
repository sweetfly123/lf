import React from 'react';
import { List, Avatar, Tag, Space } from 'antd';
import { AimOutlined, EyeOutlined, CommentOutlined } from '@ant-design/icons';
import { area, serviceData } from '../../data/service-data';
import { SearchComponent } from '../../components/search-component';
import { Link, Switch, useLocation } from 'react-router-dom';
import { RouteWithSubRoutes } from '../../routes/routes';

// const industry = ["不限","规划设计","开发","投融资","工程","运营","互联网","泛旅游","培训"];

// const business = ["不限","策划","规划","设计","咨询","持续服务","勘查设计","其它"];

// const categaries = [
//   {label:"行业",key:"industry",value:industry,moreBtn:false},
//   {label:"业务",key:"business",value:business,moreBtn:false},
//   {label:"地区",key:"area",value:area,moreBtn:true}
// ];

export function FindService(props) {
  const { routes } = props;
  const location = useLocation();
  // console.log(routes, location);
  return (
    <div>
      {/* <SearchComponent categaries={categaries}/> */}
      {location.pathname === "/home" && (<List style={{ padding: '50px 50px', marginTop: '20px' }}
        bordered={true}
        itemLayout="vertical"
        size="large"
        dataSource={serviceData}
        renderItem={item => (
          <List.Item
            key={item.key}
          >
            <List.Item.Meta
              avatar={<Avatar shape='square' size={200} src={item.avatar} />}
              title={<Link target='_blank' to='/home/details'>{item.expert_name}：{item.title}</Link>}
              description={
                <div>
                  <p>行业：{item.content.industry}</p>
                  <p>业务：{item.content.business}</p>
                  <p>标签：{item.content.tags.map(tag => <Tag color="blue">{tag}</Tag>)}</p>
                  <p>服务商：{item.content.service}</p>
                  <span style={{ width: '250px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Space>{React.createElement(AimOutlined)}{item.footer.area}</Space>
                    <Space>{React.createElement(EyeOutlined)}{item.footer.scan}</Space>
                    <Space>{React.createElement(CommentOutlined)}{item.footer.comments}</Space>
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />)}
      <Switch>
        {
          routes.map(route => (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))
        }
      </Switch>
    </div>
  )
}