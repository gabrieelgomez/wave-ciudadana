import React from 'react';
import UserInfo from '../../components/app/Home/UserInfo';
import Banner from '../../components/app/Banner';
import Feed from '../../components/app/Home/Feed';
import PollService from '../../services/api/poll';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { api } from '../../services/api';

class Home extends React.Component {
  state = {
    categories: {
      poll: []
    }
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
    if (this.props.currentUser) {
      this.getCategories()
    }
  }

  getCategories = async () => {
    const {tokens} = this.props;
    const data = await this.service.getCategories({tokens})
    this.setState({
      categories: {
        poll: data
      }
    })
  }

  render() {
    const {api, tokens, currentUser} = this.props;
    const pollCategories = this.state.categories.poll;

    return (
      <div>
        { currentUser ? (
          <div className="page-home">
            <Row gutter={16}>
              <Col offset={1} span={6} lg={6} md={6} xs={24}>
                <UserInfo />
              </Col>
              <Col span={10} lg={10} md={10} xs={24}>
                <Feed 
                  api={api}
                  tokens={tokens}
                  currentUser={currentUser}
                  pollCategories={pollCategories}
                />
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
  const { tokens, currentUser } = state.session;
  return { tokens, currentUser };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);