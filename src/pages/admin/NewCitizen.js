import React from 'react';
import NewCitizenForm from "../../components/admin/Citizens/New";
import { connect } from 'react-redux';
import { api } from '../../services/api';
import swal from 'sweetalert';

class NewCitizen extends React.Component {

  createCitizen = async (citizen) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/citizens/create',
      payload: {
        user: {
          ...citizen
        },
        citizen
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => { 
        swal('Usuario y ciudadano creados exitosamente', '', 'success')
      }
    })
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

export default connect(mapStateToProps, mapDispatchToProps)(NewCitizen);
