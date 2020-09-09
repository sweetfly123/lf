import React from 'react';
import { Carousel, List, Card, Row, Col } from 'antd';
import { businessData_1, businessData_2 } from '../../data/business-data';

const navStyle = {
  height: '66px',
  margin: '40px auto 50px',
  boxShadow: '1px 3px 5px #ddd',
  boderTop: '2px solid blue',
  display: 'flex',
  justifyContent: 'space-around',
  alignItem: 'center'
}

const linkStyle = {
  position: 'relative',
  overflow: 'hidden',
  fontSize: '22px',
  color: '#1890ff',
  height: 'inherit',
  lineHeight: '66px',
  textDecoration: 'none'
}

export function FindBusiness() {
  return (
    <div>
      <Carousel autoplay style={{ padding: '10px 10px' }}>
        <div>
          <img style={{ width: 'inherit' }} src="https://www.lvfacn.com/upload/default/20180612/4f425f5e0b2e4d5f2b43a6154c19763a.png" alt="入驻旅发网" />
        </div>
        <div>
          <img style={{ width: 'inherit' }} src="https://www.lvfacn.com/upload/default/20180612/4f425f5e0b2e4d5f2b43a6154c19763a.png" alt="入驻旅发网" />
        </div>
      </Carousel>
      <nav style={navStyle}>
        <a style={linkStyle} href="#brand" >品牌招商</a>
        <a style={linkStyle} href="#forinvite">政府招商引资</a>
        <a style={linkStyle} href="#street">商街招商</a>
        <a style={linkStyle} href="#park">园区招商</a>
        <a style={linkStyle} href="#scenic">景区招商</a>
        <a style={linkStyle} href="#town">小镇招商</a>
      </nav>
      <Card title="品牌招商" id="brand" extra={<a href="javascript:void(0)">更多</a>}>
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
                    dataSource={businessData_1}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
                <Col span={9} style={{ marginLeft: '70px' }}>
                  <List
                    dataSource={businessData_2}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>

      <Card title="政府招商引资" style={{ marginTop: "30px" }} id="forinvite" extra={<a href="javascript:void(0)">更多</a>}>
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
                    dataSource={businessData_1}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
                <Col span={9} style={{ marginLeft: '70px' }}>
                  <List
                    dataSource={businessData_2}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>

      <Card title="商街招商" style={{ marginTop: "30px" }} id="street" extra={<a href="javascript:void(0)">更多</a>}>
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
                    dataSource={businessData_1}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
                <Col span={9} style={{ marginLeft: '70px' }}>
                  <List
                    dataSource={businessData_2}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>


      <Card title="园区招商" style={{ marginTop: "30px" }} id="park" extra={<a href="javascript:void(0)">更多</a>}>
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
                    dataSource={businessData_1}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
                <Col span={9} style={{ marginLeft: '70px' }}>
                  <List
                    dataSource={businessData_2}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>


      <Card title="景区招商" style={{ marginTop: "30px" }} id="scenic" extra={<a href="javascript:void(0)">更多</a>}>
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
                    dataSource={businessData_1}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
                <Col span={9} style={{ marginLeft: '70px' }}>
                  <List
                    dataSource={businessData_2}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>


      <Card title="小镇招商" style={{ marginTop: "30px" }} id="town" extra={<a href="javascript:void(0)">更多</a>}>
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
                    dataSource={businessData_1}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
                <Col span={9} style={{ marginLeft: '70px' }}>
                  <List
                    dataSource={businessData_2}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <p>{item.area}</p>
                        ]}
                      >
                        <a style={{ color: 'black' }}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  )
}