import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export function TabsComponent(props) {
  return (
    <Tabs size="large" tabBarGutter={100} defaultActiveKey={props.defaultActiveKey} centered={props.centered}>
      {
        props.render.map(child => (
          <TabPane tab={child.tab} key={child.key}>
            <child.component />
          </TabPane>
        ))
      }
    </Tabs>
  )
}