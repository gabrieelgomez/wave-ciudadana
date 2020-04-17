import React from 'react';
import { Tabs } from 'antd';
const { TabPane }  = Tabs;

const FeedTabs = (props) => {
  return (
    <Tabs defaultActiveKey="0">
      {props.children.map((tab, idx) => {
        return (
          <TabPane tab={tab.props.tabname} key={idx}>
            { tab }
          </TabPane>
        )
      })}
    </Tabs>
  )
}

export default FeedTabs;