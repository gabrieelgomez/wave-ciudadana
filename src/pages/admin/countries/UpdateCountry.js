import React from 'react';
import UpdateCountryForm from "../../../components/admin/Countries/Update";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class UpdateCountry extends React.Component {

  state = {
    country: {}
  }

  componentDidMount() {
    const countryID = this.props.match.params.id;
    this.getCountryData(countryID)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        country: {
          ...prevState.country,
          [name]: value
        }
      }
    });
  }

  handleUpdateCountry = (e) => {
    e.preventDefault()
    const { country } = this.state;
    this.updateCountry(country)
  }

  getCountryData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/countries/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data

    this.setState({
      country: {
        id: data.id,
        ...data.attributes
      }
    })
  }

  updateCountry = async (country) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'PUT',
      endpoint: `v1/wave_citizen/countries/${country.id}/update`,
      payload: {
        country
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('País actualizado exitosamente', '', 'success')
      },
      errorCallback: (err) => {
        swal({
          title: "Hubo un eror",
          text: err.toString(),
          icon: 'error'
        })
      }
    })
    console.log(res)
  }

  render() {
    return <UpdateCountryForm
      countryData={this.state}
      handleUpdateCountry={this.handleUpdateCountry}
      handleChange={this.handleChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCountry);
