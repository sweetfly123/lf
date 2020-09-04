import React, { Component, Suspense } from 'react';

import { Dispatch } from 'redux';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import { List, Carousel, Space, Card, Tabs, Row, Col } from 'antd';
import styles from './index.less';
const { TabPane } = Tabs;

interface homeProps {
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
        console.log(JSON.parse(this.props.match.params.data))
    }


    render() {


        return (
            <GridContent>
                <Card>

                </Card>
            </GridContent>
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
