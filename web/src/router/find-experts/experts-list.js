import React, { useState, useEffect } from 'react';
import { SearchComponent } from '../../components/search-component';
import { List, Avatar, Tag, Pagination, Button } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import { getExpertsList, getExpertsListCount } from './request';
import { Link, useLocation, Route } from 'react-router-dom';
// const categaries = [
//   { label: "专家类型", key: "expertTypes", value: expertTypes, moreBtn: true },
//   { label: "业务专长", key: "businessExpertise", value: businessExpertise, moreBtn: false },
//   { label: "项目专长", key: "projectExpertise", value: projectExpertise, moreBtn: false }
// ]

//自定义Hooks：获取数据列表和总数
const useList =(page, pageSize)=>{
  const [expertsList, setExpertsList] = useState([]);
  const [totalSize, setTotalSize] = useState(0);

  useEffect(() => {
    getExpertsList({ page, pageSize }).then(res => {
      setExpertsList(res.data);
    })
  }, [page, pageSize]);

  useEffect(() => {
    getExpertsListCount().then(res => {
      setTotalSize(res.data.count);
    })
  }, []);

  return [expertsList, totalSize];
}

const PaginationContent = (props) => {
  const {totalSize, page, pageSize, changePage, changePageSize} = props;
  return (
    <Pagination style={{ float: 'right', marginTop: '20px' }} defaultCurrent={1}
      defaultPageSize={10} current={page} total={totalSize} pageSize={pageSize}
      onChange={(page, pageSize) => { changePage(page); changePageSize(pageSize); }} />
  )
}

export function ExpertsList(props) {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [expertsList, count] = useList(page, pageSize);
  return (
    <div>
      {/* <SearchComponent categaries={categaries} /> */}
      {
        location.pathname === '/experts' && (
          <div>
            <List style={{ padding: '50px 50px', marginTop: '20px' }}
              bordered={true}
              itemLayout="vertical"
              size="large"
              dataSource={expertsList}
              renderItem={item => {
                const path = {
                  pathname: `/experts/details?id=${item.id}`,
                  state: item
                };
                return (
                  <List.Item
                    key={item.userId}
                    extra={
                      <Button>
                        加好友
                </Button>
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar shape='circle' size={150} src={`https://www.lvfacn.com/upload/${item.avatar}`} />}
                      title={<Link to={path}>{item.names}</Link>}
                      description={
                        <div>
                          <p>{item.curJob}-{item.curCorp}</p>
                          <p>
                            <AimOutlined />{item.provinces}-{item.cities}
                          </p>
                          <p>擅长领域：
                      {
                              item.specialty && item.specialty.split(",").map(tag => (
                                <Tag color='#0aa344' key={tag}>{tag}</Tag>
                              ))
                            }
                          </p>
                          <p>
                            <Tag color='orange'>服务咨询：¥ {item.minprice}</Tag>
                          </p>
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