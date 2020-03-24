import React from 'react';
import UserShowCard from "../../components/admin/User/Show";
import { connect } from 'react-redux';
import { api } from '../../services/api';

class ShowUser extends React.Component {

  state = {
    user: {}
  }

  componentDidMount() {
    this.userID = this.props.match.params.id
    this.getUserData(this.userID)
  }

  getUserData = async (id) => {
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/users/${id}`
    })
    const data = res.data.data;
    console.log(res)

    this.setState({
      user: {
        id: data.id,
        name: data.attributes.name,
        lastname: data.attributes.lastname,
        nickname: data.attributes.nickname,
        email: data.attributes.email,
        phone_one: data.attributes.phone_one,
        phone_two: data.attributes.phone_two,
        dni: data.attributes.dni,
        gender: data.attributes.gender
      }
    })
  }

  render() {
    return <UserShowCard
      user={this.state.user}
    />
  }
}

const mapDispatchToProps = {
  api
}

export default connect(null, mapDispatchToProps)(ShowUser);
