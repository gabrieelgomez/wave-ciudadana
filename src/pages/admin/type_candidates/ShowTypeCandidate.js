import React from 'react';
import TypeCandidateShowCard from "../../../components/admin/TypeCandidates/Show";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class ShowTypeCandidate extends React.Component {

  state = {
    type_candidate: {},
    country: {}
  }

  componentDidMount() {
    this.type_candidateID = this.props.match.params.id
    this.getTypeCandidateData(this.type_candidateID)
  }

  getTypeCandidateData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/type_candidacies/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data
    const type_candidateData = data.attributes

    this.setState({
      type_candidate: {
        id: data.id,
        ...type_candidateData
      },
      country: {
        name: type_candidateData.country.name
      }
    })
  }

  deleteTypeCandidate = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'DELETE',
      endpoint: `v1/wave_citizen/type_candidacies/${id}/destroy`,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal(`Tipo de candidatura eliminada con exito`, {
          icon: "success",
        }).then(()=> {
          this.props.history.push('/admin/type_candidates');
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
        this.deleteTypeCandidate(this.type_candidateID)
      } else {
        swal(`Tipo de Candidatura está a salvo`);
      }
    });
  }

  render() {
    return <TypeCandidateShowCard
      type_candidate={this.state.type_candidate}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowTypeCandidate);
