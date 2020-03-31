import React from 'react';
import ProposalShowCard from "../../../components/admin/Proposals/Show";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class ShowProposal extends React.Component {

  state = {
    proposal: {},
    proposal_category: {},
    proposal_user: {}
  }

  componentDidMount() {
    this.proposalID = this.props.match.params.id
    this.getProposalData(this.proposalID)
  }

  getProposalData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/proposals/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data
    const proposalData = data.attributes

    this.setState({
      proposal: {
        id: data.id,
        ...proposalData
      },
      proposal_category: {
        name: proposalData.proposal_category.name
      },
      proposal_user: {
        ...proposalData.user
      }
    })
  }

  deleteProposal = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'DELETE',
      endpoint: `v1/wave_citizen/proposals/${id}/destroy`,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal(`Tipo de candidatura eliminada con exito`, {
          icon: "success",
        }).then(()=> {
          this.props.history.push('/admin/proposals');
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
        this.deleteProposal(this.proposalID)
      } else {
        swal(`Propuesta está a salvo`);
      }
    });
  }

  render() {
    return <ProposalShowCard
      proposal={this.state.proposal}
      proposal_category={this.state.proposal_category}
      proposal_user={this.state.proposal_user}

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

export default connect(mapStateToProps, mapDispatchToProps)(ShowProposal);
