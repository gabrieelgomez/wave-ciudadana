import React from 'react';
import AdminUsers from "../../components/admin/User";
import { connect } from 'react-redux';
import { api } from '../../services/api';

class AllUsers extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.getUsersData()
  }

  getUsersData = async () => {
    let data = [];
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/users',
    })
    
    if (res.data) {
      data = res.data.data.map((item, idx) => {
        return {
          id: item.id,
          ...item.attributes
        }
      });
    }

    this.setState({
      users: data
    })
  }

  render() {
    return <AdminUsers
      users={this.state.users}
    />
  }
}

const mapDispatchToProps = {
  api
}

export default connect(null, mapDispatchToProps)(AllUsers);
