import React from 'react';
import './expert-detail.css'
import {Card, Tabs, Tag, Button} from 'antd';
import { UserOutlined, HomeOutlined, GlobalOutlined } from '@ant-design/icons';
import {HTMLDecode} from '../../utils/utils';
export function ExpertsDetails(props){
  const {curJob, curCorp, specialty, provinces, cities, minprice, detail, names, avatar} = props.location.state;
  return (
    <div>
      <div className="user-head">
        <div className="user-top">
          <div className="avatar-img">
            <img src={`https://www.lvfacn.com/upload/${avatar}`}/>
          </div>
          <div className="user-desc">
            <div className="desc-top">
              <h3>{names}</h3>
              <span>
              {
                specialty && specialty.split(",").map(tag => (
                  <Tag color='#0aa344' key={tag}>{tag}</Tag>
                ))
              }
              </span>
            </div>
          </div>
        </div>
        <div className="user-introduce">
          <p className="position"><UserOutlined/> {curJob}</p>
          <p className="company"><HomeOutlined/> {curCorp}</p>
          <p className="address"><GlobalOutlined/> {provinces}-{cities}</p>
        </div>
        <div className="user-command">
          <Button size="large" type="default">加好友</Button>
          <Button size="large" type="primary" style={{marginLeft:'20px'}}>加关注</Button>
        </div>
      </div>
      <Card title="专家服务">
      <Card title={<span style={{color:'rgba(255,72,56,1)',fontSize:'20px'}}>{`¥ ${minprice}/次`}</span>}
        style={{ width: 300 }}
        actions={[<Button size='large' type='danger'>立即购买</Button>]}
        >
        <Card.Meta
          description="单次最长服务时间为30分钟"
        />
        </Card>
      </Card>
      <Card title="专家介绍" style={{marginTop:'15px'}}>
        {HTMLDecode(detail)}
      </Card>
      <Tabs defaultActiveKey={1} style={{marginTop:'15px'}} size='large'>
        <Tabs.TabPane tab="服务" key={1}>
              TA发布的服务
        </Tabs.TabPane>
        <Tabs.TabPane tab="需求" key={2}>
              TA发布的需求
        </Tabs.TabPane>
        <Tabs.TabPane tab="招商" key={3}>
              TA发布的招商
        </Tabs.TabPane>
        <Tabs.TabPane tab="招聘" key={4}>
              TA发布的招聘
        </Tabs.TabPane>
        <Tabs.TabPane tab="文章" key={5}>
              TA发布的文章
        </Tabs.TabPane>
        <Tabs.TabPane tab="知识问答" key={6}>
              TA发布的知识问答
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}