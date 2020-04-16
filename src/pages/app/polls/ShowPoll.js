import React from 'react';
import FeedCard from '../../../components/app/Home/Feed/Card';
import PollService from '../../../services/api/poll';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class Show extends React.Component {
  state = {
    poll: {}
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
    this.pollID = this.props.match.params.id
    this.getPoll(this.pollID)
  }

  getPoll = async (id) => {
    const { tokens } = this.props;
    const res = await this.service.getOne({tokens, id})
    const data = res.data.data;

    const poll = {
      id: data.id,
      type: data.type,
      ...data.attributes
    }
    
    this.setState({
      poll: poll
    })
  }

  render() {
    const { poll } = this.state;
    return (
      <Row>
        <Col span={12} offset={6}>
          <FeedCard
            item={poll}
            type={poll.type}
          />
        </Col>
      </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Show);