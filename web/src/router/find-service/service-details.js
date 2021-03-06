import React from 'react';
import {Card, Space, Avatar, List, Image, Tooltip, Tag} from 'antd';
import { EyeOutlined, CommentOutlined } from '@ant-design/icons';
const handleStyle = {
  display:'flex',
  width:'150px',
  flexDirection:'row',
  justifyContent:'space-around'
};

const descriptionStyle = {fontWeight:'bold',fontSize:'16px'};

export function ServiceDetails(props) {
  const {id, name, postHits, coCount, serveType, resourceType, productType, summary, province, cname, thumbnail} = props.location.state;
  const imageSrc = `https://www.lvfacn.com/upload/${JSON.parse(thumbnail).path}`;
  return (
    <div id={id}>
      <Card title={name}>
        <div style={handleStyle}>
          <Space>{React.createElement(EyeOutlined)}{postHits}</Space>
          <Space>{React.createElement(CommentOutlined)}{coCount}</Space>
        </div>
        <List.Item >
          <List.Item.Meta
            avatar={<Avatar shape='square' size={200} src={imageSrc} />}
            description={
              <div style={{marginLeft:'20px'}}>
                <p style={descriptionStyle}>行业：{serveType}</p>
                <p style={descriptionStyle}>业务：{resourceType}</p>
                <p style={descriptionStyle}>地区：{province}</p>
                <p style={descriptionStyle}>服务商：{cname}</p>
              </div>
            }
          />
        </List.Item>
      </Card>
      <Card title="产品服务介绍" style={{marginTop:'15px'}}>
        <p style={{fontSize:'16px'}}>{summary}</p>
      </Card>
      <Card title="服务图集" style={{marginTop:'15px'}}>
        <Tooltip title="点击图片可放大">
          <Image width={200} src={imageSrc}/>
        </Tooltip>
      </Card>
      <Card title="标签" style={{marginTop:'15px'}}>
        <p>{productType !== "" && productType.split(",").map(tag => <Tag color="#0aa344" key={tag}>{tag}</Tag>)}</p>
      </Card>
    </div>
  )
}