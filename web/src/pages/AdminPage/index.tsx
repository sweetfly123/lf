import React, { Component, Suspense } from 'react';

import { Dispatch } from 'redux';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import { Divider, Space, Table, Input, Tabs, Row, Col, Button } from 'antd';
import { DoubleRightOutlined, SmileTwoTone, AudioOutlined } from '@ant-design/icons';

const { Search } = Input;
import { dataType } from './data';
import styles from './index.less';
const { TabPane } = Tabs;

interface adminPageProps {
    adminPage: dataType;
    dispatch: Dispatch<any>;
    loading: boolean;
}

interface adminPageState {
    page: number,
    pageSize: number,
    selectedRowKeys: any[]
}

const columns = [
    {
        title: '编号',
        dataIndex: 'id',
        width: 50,
    },
    {
        title: '标题',
        dataIndex: 'name',
        width: 200,
        ellipsis: true,
    },
    {
        title: '类别',
        dataIndex: 'serveType',
        width: 100,
    },
    {
        title: '省份',
        dataIndex: 'province',
        width: 80,
    }, {
        title: '详情',
        dataIndex: 'summary',
        width: 200,
        ellipsis: true,
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
        width: 100,
    },
];


class adminPage extends Component<
    adminPageProps,
    adminPageState
    > {
    state: adminPageState = {
        page: 1,
        pageSize: 8,
        selectedRowKeys: [],
    };


    componentDidMount() {
        this.getCount()
        this.fetchData()
    }
    getCount = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'adminPage/count',
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
            type: 'adminPage/fetchDatas',
            payload: {
                get: str
            },
        });
    }
    jumpDetail = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'adminPage/jumpDetail',
            payload: {
                get: 1
            },
        });
    }
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { pageSize, selectedRowKeys } = this.state
        const { adminPage, loading, dispatch } = this.props;
        const { listData, count } = adminPage;
        console.log(listData)
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        };
        return (
            <GridContent className={styles.GridContent}>
                <div>

                    <Space style={{ marginBottom: 16, float: 'right' }}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />

                        <Button>添加</Button>
                    </Space>
                </div>
                <Divider />
                <Table pagination={{
                    onChange: page => {
                        this.toPage(page)
                    },
                    pageSize: pageSize,
                    total: count,
                    onShowSizeChange: (current, pageSize) => {
                        this.onShowSizeChange(current, pageSize)
                    },
                    size: 'small'
                }} rowKey="id" rowSelection={rowSelection} columns={columns} dataSource={listData} />
            </GridContent >
        );
    }
}

export default connect(
    ({
        adminPage,
        loading,
    }: {
        adminPage: any;
        loading: {
            effects: { [key: string]: boolean };
        };
    }) => ({
        adminPage,
        loading: loading.effects['adminPage/fetchDatas'],
    }),
)(adminPage);
