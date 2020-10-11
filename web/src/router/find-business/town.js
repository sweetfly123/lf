import React from 'react';
import { Card, Row, Col, List } from 'antd';
import { Link } from 'react-router-dom';

export function TownService(props) {
  const {data} = props;
  const left_data = data.concat().splice(0,5);
  const right_data = data.concat().splice(5, data.length-1);
  return (
    <Card id="park">
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={5}>
            <Card hoverable size='default'
              cover={<img src="https://www.lvfacn.com/upload/default/20180613/70da7ac11f2260bda65c45cc57ed9f2c.png" alt="品牌招商" />}>
              <Card.Meta title="天际阳光风情商业街盛大招商" description="广东省" />
            </Card>
          </Col>
          <Col span={19}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={5}>
                <Card hoverable
                  cover={<img height="200" src="https://www.lvfacn.com/upload/default/20180613/7401c7e2b44e48d3a4f3aaee47887e34.png" alt="品牌招商" />}>
                  <Card.Meta title="晋中太谷旅游商业街项目招商" description="山西省" />
                </Card>
              </Col>
              <Col span={5}>
                <Card hoverable
                  cover={<img height="200" src="https://www.lvfacn.com/upload/default/20180613/7c1854c8d8be4b781813966b86cc1c9e.png" alt="品牌招商" />}>
                  <Card.Meta title="修河天街旅游商品一条街项目招商" description="江西省" />
                </Card>
              </Col>
              <Col span={5}>
                <Card hoverable
                  cover={<img height="200" src="https://www.lvfacn.com/upload/default/20180613/e6b2864e983ac1930930f471b1137f87.png" alt="品牌招商" />}>
                  <Card.Meta title="四川省自贡高新区卧龙湖欧洲风情街建设项" description="四川省" />
                </Card>
              </Col>
              <Col span={5}>
                <Card hoverable
                  cover={<img height="200" src="https://www.lvfacn.com/upload/default/20180613/e6b2864e983ac1930930f471b1137f87.png" alt="品牌招商" />}>
                  <Card.Meta title="四川省自贡高新区卧龙湖欧洲风情街建设项" description="四川省" />
                </Card>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={9}>
                <List
                  dataSource={left_data}
                  renderItem={item => {
                    const path = {
                      pathname: `/business/details?id=${item.id}`,
                      state: item
                    }
                    return (
                      <List.Item
                        actions={[
                          <p>{item.province}</p>
                        ]}
                      >
                        <Link style={{ color: 'black' }} to={path}>{item.name}</Link>
                      </List.Item>
                    )
                  }}
                />
              </Col>
              <Col span={9} style={{ marginLeft: '70px' }}>
                <List
                  dataSource={right_data}
                  renderItem={item => {
                    const path = {
                      pathname: `/business/details?id=${item.id}`,
                      state: item
                    }
                    return (
                      <List.Item
                        actions={[
                          <p>{item.province}</p>
                        ]}
                      >
                        <Link style={{ color: 'black' }} to={path}>{item.name}</Link>
                      </List.Item>
                    )
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Card>
  )
}