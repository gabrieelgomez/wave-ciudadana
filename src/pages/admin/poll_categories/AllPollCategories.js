import React from 'react';
import AdminPollCategories from "../../../components/admin/PollCategories";
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class AllPollCategories extends React.Component {

  state = {
    poll_categories: []
  }

  componentDidMount() {
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
      data = res.data.data.map((item, iAdminPollCategoriesdx) => {
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

  render() {
    return <AdminPollCategories
      poll_categories={this.state.poll_categories}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllPollCategories);
