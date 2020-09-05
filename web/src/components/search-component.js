import React from 'react';
import { Card, Divider, Row, Col, Button, Collapse } from 'antd';
import { SearchOutlined, RetweetOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import CheckableTag from 'antd/lib/tag/CheckableTag';

const { Panel } = Collapse;

export class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: false
    }
  }
  render() {
    const { categaries } = this.props;
    const { reset } = this.state;
    return (
      <Collapse expandIconPosition="right">
        <Panel header="搜索条件：">
          <Card actions={[
            <Row justify='center' gutter={2}>
              <Col><Button type="primary" icon={<SearchOutlined />}>搜索</Button></Col>
              <Col><Button icon={<RetweetOutlined />}>重置</Button></Col>
            </Row>
          ]}>
            <div style={{ padding: '10px 10px', height: 'auto', width: 'auto' }}>
              {
                categaries.map(categary => (
                  <>
                    <div key={categary.key}>
                      <span>{categary.label}：</span>
                      {
                        categary.moreBtn
                          ? <MoreSelections data={categary.value} reset={reset} />
                          : <Selections data={categary.value} reset={reset} />
                      }
                    </div>
                    <Divider dashed />
                  </>
                ))
              }
            </div>
          </Card>
        </Panel>
      </Collapse>

    )
  }

  resetSearchCondition = () => {
    this.setState({ reset: true })
  }
}

class Selections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: '不限'
    }
  }
  render() {
    const { data } = this.props;
    const { selectedTag } = this.state;
    return (
      <>
        {
          data.map(item => (
            <CheckableTag
              key={item}
              checked={item === selectedTag}
              onChange={() => this.setState({ selectedTag: item })}
            >
              {item}
            </CheckableTag>
          ))
        }
      </>
    )
  }
}

class MoreSelections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      selectedTag: '不限'
    }
  }
  render() {
    const { data } = this.props;
    const { showMore, selectedTag } = this.state;
    return (
      <>
        {
          data.concat().splice(0, 12).map(item =>
            (
              <CheckableTag
                key={item}
                checked={item === selectedTag}
                onChange={() => this.setState({ selectedTag: item })}
              >
                {item}
              </CheckableTag>
            )
          )
        }
        {showMore && (<div style={{ marginTop: "5px" }}></div>)}
        {
          showMore && data.concat().splice(13, data.length - 1).map(
            item =>
              (
                <CheckableTag
                  key={item}
                  checked={item === selectedTag}
                  onChange={() => this.setState({ selectedTag: item })}
                >
                  {item}
                </CheckableTag>
              )
          )
        }
        <Button type='link' onClick={() =>
          this.setState(prevState => ({ showMore: !prevState.showMore }))}>
          {showMore ?
            <>收起 <UpOutlined /></> :
            <>更多 <DownOutlined /></>}
        </Button>
      </>
    )
  }
}