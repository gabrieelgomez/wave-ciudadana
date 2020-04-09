import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import Banner from '../../components/app/Banner';
import PollBox from '../../components/app/Box';

class Home extends React.Component {
  render() {
    const currentUser = this.props.currentUser;

    return (
      <div>
        { currentUser ? (
          <div className="feed">
            <Row>
              <Col offset={1} span={6}>Profile</Col>
              <Col span={10}>
                <PollBox />
              </Col>
              <Col span={6}></Col>
            </Row>
          </div>
        ): (
          <Banner />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state.session;
  return {
    currentUser: currentUser
  }
}

export default connect(mapStateToProps)(Home);