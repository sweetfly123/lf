import React from 'react';
import {Card, Space, Avatar, List, Image, Tooltip, Tag} from 'antd';
import { EyeOutlined } from '@ant-design/icons';
const handleStyle = {
  display:'flex',
  width:'150px',
  flexDirection:'row',
  justifyContent:'space-around'
};

const descriptionStyle = {fontWeight:'bold',fontSize:'16px'};

export function BusinessDetails(props){
  const {id, name, postHits, merchantsType, resourceType, productType, summary, province, cname, thumbnail} = props.location.state;
  const imageSrc = `https://www.lvfacn.com/upload/${JSON.parse(thumbnail).path}`;
  return (
    <div id={id}>
      <Card title={name}>
        <div style={handleStyle}>
          <Space>浏览{React.createElement(EyeOutlined)}{postHits}</Space>
        </div>
        <List.Item >
          <List.Item.Meta
            avatar={<Avatar shape='square' size={200} src={imageSrc} />}
            description={
              <div style={{marginLeft:'20px'}}>
                <p style={descriptionStyle}>招商类型：{merchantsType}</p>
                <p style={descriptionStyle}>招商对象：{resourceType}</p>
                <p style={descriptionStyle}>地区：{province}</p>
                <p style={descriptionStyle}>招商主体：{cname}</p>
              </div>
            }
          />
        </List.Item>
      </Card>
      <Card title="基本信息" style={{marginTop:'15px'}}>
        <p style={{fontSize:'16px'}}>{summary}</p>
      </Card>
      <Card title="图集" style={{marginTop:'15px'}}>
        <Tooltip title="点击图片可放大">
          <Image width={200} src={imageSrc}/>
        </Tooltip>
      </Card>
      <Card title="标签" style={{marginTop:'15px'}}>
        <p>{productType !== "" && productType.split(",").map(tag => <Tag color="#0aa344">{tag}</Tag>)}</p>
      </Card>
    </div>
  )
}