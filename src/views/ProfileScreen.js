import React from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <Card title="Card title" bordered={false}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default connect()(Profile);