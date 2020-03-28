import React from 'react';
import NewCountryForm from "../../../components/admin/Countries/New";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewCountry extends React.Component {

  createCountry = async (country) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/countries/create',
      payload: {
        country
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('País creado exitosamente', '', 'success')
      }
    })
  }

  render() {
    return <NewCountryForm
      createCountry={this.createCountry}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewCountry);
