import React from 'react';
import NewCitizenForm from "../../components/admin/Citizens/New";
import { connect } from 'react-redux';
import { api } from '../../services/api';

class NewUser extends React.Component {

  createCitizen = async (user, citizen) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/citizens/create',
      payload: {
        user,
        citizen
      },
      headers: {
        'access-token': access_token,
        client, uid
      }
    })
    console.log(res)
  }

  render() {
    return <NewCitizenForm
      createCitizen={this.createCitizen}
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
