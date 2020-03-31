import React from 'react';
import CitizenShowCard from "../../../components/admin/Citizens/Show";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';
class ShowCitizen extends React.Component {

  state = {
    citizen: {}
  }

  componentDidMount() {
    this.citizenID = this.props.match.params.id
    this.getCitizenData(this.citizenID)
  }

  getCitizenData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/citizens/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data
    const citizenData = data.attributes

    this.setState({
      citizen: {
        id: data.id,
        ...citizenData
      }
    })
  }

  deleteCitizen = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'DELETE',
      endpoint: `v1/wave_citizen/citizens/${id}/destroy`,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal(`Ciudadano eliminado con exito`, {
          icon: "success",
        }).then(()=> {
          this.props.history.push('/admin/citizens');
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
      text: "Si elimina este record, afectará todos los subrecords que han sido creados a partir de él, siendo eliminados también",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deleteCitizen(this.citizenID)
      } else {
        swal(`Ciudadano está a salvo`);
      }
    });
  }

  render() {
    return <CitizenShowCard
      citizen={this.state.citizen}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowCitizen);
