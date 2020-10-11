import React, { useState, useEffect } from 'react';
import { List, Avatar, Tag, Space, Pagination } from 'antd';
import { AimOutlined, EyeOutlined, CommentOutlined } from '@ant-design/icons';
import { SearchComponent } from '../../components/search-component';
import { Link, useLocation, Route } from 'react-router-dom';
import { getServiceList, getServiceListCount } from './request';
// const industry = ["不限","规划设计","开发","投融资","工程","运营","互联网","泛旅游","培训"];

// const business = ["不限","策划","规划","设计","咨询","持续服务","勘查设计","其它"];

// const categaries = [
//   {label:"行业",key:"industry",value:industry,moreBtn:false},
//   {label:"业务",key:"business",value:business,moreBtn:false},
//   {label:"地区",key:"area",value:area,moreBtn:true}
// ];

//自定义Hooks：获取数据列表和总数
const useList =(page, pageSize)=>{
  const [serviceList, setServiceList] = useState([]);
  const [totalSize, setTotalSize] = useState(0);

  useEffect(() => {
    getServiceList({ page, pageSize }).then(res => {
      setServiceList(res.data);
    })
  }, [page, pageSize]);

  useEffect(() => {
    getServiceListCount().then(res => {
      setTotalSize(res.data.count);
    })
  }, []);

  return [serviceList, totalSize];
}

const PaginationContent = (props) => {
  const {totalSize, page, pageSize, changePage, changePageSize} = props;
  return (
    <Pagination style={{ float: 'right', marginTop: '20px' }} defaultCurrent={1}
      defaultPageSize={10} current={page} total={totalSize} pageSize={pageSize}
      onChange={(page, pageSize) => { changePage(page); changePageSize(pageSize); }} />
  )
}

export function ServiceList(props) {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [serviceList, count] = useList(page, pageSize);
  return (
    <div>
      {/* <SearchComponent categaries={categaries}/> */}
      {
        location.pathname === '/service' && (
          <div>
            <List style={{ padding: '50px 50px', marginTop: '20px' }}
              bordered={true}
              itemLayout="vertical"
              size="large"
              dataSource={serviceList}
              renderItem={item => {
                const path = {
                  pathname: `/service/detail?id=${item.id}`,
                  state: item
                };
                return (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      avatar={<Avatar shape='square' size={200} src={`https://www.lvfacn.com/upload/${JSON.parse(item.thumbnail).path}`} />}
                      title={<Link to={path}>{item.name}</Link>}
                      description={
                        <div>
                          <p>行业：{item.serveType}</p>
                          <p>业务：{item.resourceType}</p>
                          <p>标签：{item.productType !== "" && item.productType.split(",").map(tag => <Tag color="#0aa344" key={tag}>{tag}</Tag>)}</p>
                          <p>服务商：{item.cname}</p>
                          <span style={{ width: '250px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Space>{React.createElement(AimOutlined)}{item.province}</Space>
                            <Space>{React.createElement(EyeOutlined)}{item.postHits}</Space>
                            <Space>{React.createElement(CommentOutlined)}{item.coCount}</Space>
                          </span>
                        </div>
                      }
                    />
                  </List.Item>
                )
              }}
            />
            <PaginationContent totalSize={count} page={page} pageSize={pageSize}
              changePage={(val)=>setPage(val)} changePageSize={(val) => setPageSize(val)}/>
          </div>
        )
      }

      {
        props.routes.map(route => (
          <Route key={route.key} path={route.path} component={route.component} />
        ))
      }
    </div>
  )
}
