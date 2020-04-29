import React from 'react';
import moment from 'moment';
import AdminPolls from "../../../components/admin/Polls";
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class AllPolls extends React.Component {

  state = {
    polls: [],
    poll_categories: []
  }

  componentDidMount() {
    this.getPollsData()
    this.getPollCategoriesData()
  }

  getPollCategoriesData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/poll_categories',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    if (res.data) {
      data = res.data.data.map((item) => {
        const attrs = item.attributes;

        return {
          id: item.id,
          ...attrs
        }
      });
    }

    this.setState({
      poll_categories: data
    })
  }

  getPollsData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/polls',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    if (res.data) {
      data = res.data.data.map((item, idx) => {
        const attrs = item.attributes;
        var actualDate = moment().format('YYYY-MM-DD');
        var formatActualDate = actualDate + "T00:00:00.000Z";

        let expired = false;

        if (attrs.due_date <= formatActualDate) {
          expired = true
        }

        return {
          id: item.id,
          expired,
          ...attrs
        }
      });
    }

    this.setState({
      polls: data
    })
  }

  render() {
    return <AdminPolls
      polls={this.state.polls}
      pollCategoriesData={this.state.poll_categories}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens } = state.session;
  return { tokens };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPolls);
