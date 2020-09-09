import React from 'react';
import { expertData, expertTypes, businessExpertise, projectExpertise } from '../../data/expert-data';
import { SearchComponent } from '../../components/search-component';
import { List, Avatar, Tag, Space, Button } from 'antd';
import { AimOutlined } from '@ant-design/icons';

const categaries = [
  { label: "专家类型", key: "expertTypes", value: expertTypes, moreBtn: true },
  { label: "业务专长", key: "businessExpertise", value: businessExpertise, moreBtn: false },
  { label: "项目专长", key: "projectExpertise", value: projectExpertise, moreBtn: false }
]
export function FindExperts() {
  return (
    <div>
      <SearchComponent categaries={categaries} />
      <List style={{ padding: '50px 50px', marginTop: '20px' }}
        bordered={true}
        itemLayout="vertical"
        size="large"
        dataSource={expertData}
        renderItem={item => (
          <List.Item
            key={item}
            extra={
              <Button color='blue'>
                加好友
                </Button>
            }
          >
            <List.Item.Meta
              avatar={<Avatar size={150} src={item.avatar} />}
              title={
                <>
                  {item.name}
                  <Tag color='#108ee9' style={{ marginLeft: '10px' }}>{item.title}</Tag>
                </>}
              description={
                <>
                  <p>{item.description}</p>
                  <p>
                    <Space>{React.createElement(AimOutlined)}{item.area}</Space>
                  </p>
                  <p>擅长领域：
                      {
                      item.tags.map(tag => (
                        <Tag color='blue'>{tag}</Tag>
                      ))
                    }
                  </p>
                  <p>
                    <Tag color='orange'>服务咨询：¥ {item.fee}</Tag>
                  </p>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  )
}