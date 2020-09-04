import React, { Component, Suspense } from 'react';

import { Dispatch } from 'redux';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import { List, Carousel, Space, Card, Tabs, Row, Col } from 'antd';
import { DoubleRightOutlined, SmileTwoTone } from '@ant-design/icons';
import { homeData } from './data';
import styles from './index.less';
const { TabPane } = Tabs;

interface homeProps {
    home: homeData;
    dispatch: Dispatch<any>;
    loading: boolean;
}

interface homeState {
    page: number,
    pageSize: number
}

class home extends Component<
    homeProps,
    homeState
    > {
    state: homeState = {
        page: 1,
        pageSize: 8
    };


    componentDidMount() {
        this.getCount()
        this.fetchData()
    }
    getCount = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'home/count',
        });
    }
    toPage = (page: number) => {
        this.setState({
            page: page
        },
            () => {
                this.fetchData()
            }
        )
    }
    onShowSizeChange = (current, pageSize) => {
        this.setState({
            pageSize: pageSize
        },
            () => {
                this.fetchData()
            }
        )
    }
    fetchData = () => {
        const { page, pageSize } = this.state
        const { dispatch } = this.props;
        let str = `page=${page}&pageSize=${pageSize}`
        dispatch({
            type: 'home/fetchDatas',
            payload: {
                get: str
            },
        });
    }
    jumpDetail = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'home/jumpDetail',
            payload: {
                get: 1
            },
        });
    }


    render() {
        const { pageSize } = this.state
        const { home, loading, dispatch } = this.props;
        const { listData, count } = home;
        const IconText = ({ icon, text }) => (
            <Space>
                {React.createElement(icon)}
                {text}
            </Space>
        );
        const list = (<List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    this.toPage(page)
                },
                pageSize: pageSize,
                total: count,
                onShowSizeChange: (current, pageSize) => {
                    this.onShowSizeChange(current, pageSize)
                },
                size: 'small'
            }}
            dataSource={listData}
            footer={
                <div>

                </div>
            }
            renderItem={item => (
                <List.Item
                    key={item.name}
                >
                    <List.Item.Meta
                        // avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                        title={<a onClick={this.jumpDetail}>{item.name}<span className={styles.moreIcon}><DoubleRightOutlined /></span></a>}
                    // description={item.cname}
                    />
                    {/* {item.summary} */}
                </List.Item>
            )}
        />)
        return (
            <GridContent className={styles.GridContent}>
                <Row>
                    <Col span={6}>
                        <div className={styles.leftContainer}>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                            <div>政府</div>
                        </div>
                    </Col>
                    <Col span={18} >
                        <Carousel autoplay>
                            <div className={styles.contentStyle} >
                                <img src='https://img.ivsky.com/img/tupian/co/202003/18/jinmen_daqiao-004.jpg' alt="" />
                            </div>
                            <div className={styles.contentStyle} >
                                <img src='https://img.ivsky.com/img/tupian/co/202003/18/hangpai_hailang.jpg' alt="" />
                            </div>
                            <div className={styles.contentStyle} >
                                <img src='https://img.ivsky.com/img/tupian/co/202003/18/luoma_doushouchang-007.jpg' alt="" />
                            </div>
                            <div className={styles.contentStyle} >
                                <img src='https://img.ivsky.com/img/tupian/co/202003/18/hyundai_jianzhu-005.jpg' alt="" />
                            </div>
                        </Carousel>
                        <Card>
                            <Tabs size="large">
                                <TabPane tab="政府" key="1">
                                    {list}
                                </TabPane>
                                <TabPane tab="当地" key="2">
                                    {list}
                                </TabPane>
                                <TabPane tab="国际" key="3">
                                    {list}
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </GridContent >
        );
    }
}

export default connect(
    ({
        home,
        loading,
    }: {
        home: any;
        loading: {
            effects: { [key: string]: boolean };
        };
    }) => ({
        home,
        loading: loading.effects['home/fetchDatas'],
    }),
)(home);
