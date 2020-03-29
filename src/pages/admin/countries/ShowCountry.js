import React from 'react';
import CountryShowCard from "../../../components/admin/Countries/Show";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class ShowCountry extends React.Component {

  state = {
    country: {}
  }

  componentDidMount() {
    this.countryID = this.props.match.params.id
    this.getCountryData(this.countryID)
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
    const countryData = data.attributes

    this.setState({
      country: {
        id: data.id,
        ...countryData
      }
    })
  }

  deleteCountry = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'DELETE',
      endpoint: `v1/wave_citizen/countries/${id}/destroy`,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal(`País eliminado con exito`, {
          icon: "success",
        }).then(()=> {
          this.props.history.push('/admin/countries');
        });
      },
      errorCallback: () => {
        swal(`Hubo un error, no se ha podido eliminar`, {
          icon: "error",
        })
      }
    })
  }

  handleDelete = (e) => {
    e.preventDefault();
    swal({
      title: "¿Estás seguro de eliminar?",
      text: "Una vez eliminado, no se puede volver atrás",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deleteCountry(this.countryID)
      } else {
        swal(`País está a salvo`);
      }
    });
  }

  render() {
    return <CountryShowCard
      country={this.state.country}
      handleDelete={this.handleDelete}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowCountry);
