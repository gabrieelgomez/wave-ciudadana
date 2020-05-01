import React from 'react';
import UserInfo from '../../components/app/UserInfo';
import Banner from '../../components/app/Banner';
import Feed from '../../components/app/Feed';
import PollService from '../../services/api/poll';
import { Row, Col, Affix } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { api } from '../../services/api';
import { SET_POLLS_HOME } from '../../actions/poll';

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
      this.getPolls()
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

  getPolls = async () => {
    const {tokens} = this.props;
    const data = await this.service.getAll({tokens})
    this.props.polls(data)
  }

  render() {
    const {api, tokens, currentUser, pollsHome, polls} = this.props;
    const pollCategories = this.state.categories.poll;

    return (
      <div>
        { currentUser ? (
          <div className="page">
            <Row gutter={16}>
              <Col span={6} lg={{span: 6, offset: 1}} md={{span: 8, offset: 1}} xs={0}>
                <Affix offsetTop={15}>
                  <UserInfo />
                </Affix>
              </Col>
              <Col span={10} lg={10} md={14} xs={{span: 22, offset: 1}}>
                <Feed
                  api={api}
                  tokens={tokens}
                  currentUser={currentUser}
                  pollsHome={pollsHome}
                  savePollsHome={polls}
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
  const { pollsHome } = state.polls;

  return { tokens, currentUser, pollsHome };
}

const mapDispatchToProps = {
  api,
  polls: SET_POLLS_HOME
}

// const mapDispatchToProps = dispatch => {
//   return {
//     polls: (polls) => {
//       debugger
//       dispatch(SET_POLLS_HOME)
//     },
//     api: () => dispatch(api),
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         api,
//         polls: SET_POLLS_HOME
//     }, dispatch);
// };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
