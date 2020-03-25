import React from 'react';
import NewUserForm from "../../components/admin/User/New";
import { connect } from 'react-redux';
import { api } from '../../services/api';

class NewUser extends React.Component {

  createUser = async (user) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'POST',
      endpoint: 'v1/users/create',
      payload: {
        user
      },
      headers: {
        'access-token': access_token,
        client, uid
      }
    })
    console.log(res)
  }

  render() {
    return <NewUserForm
      createUser={this.createUser}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
