import React from 'react';
import UpdateProposalForm from "../../../components/admin/Proposals/Update";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class UpdateProposal extends React.Component {

  state = {
    proposal: {},
    proposal_categories: []
  }

  componentDidMount() {
    const proposalID = this.props.match.params.id;
    this.getProposalData(proposalID)
    this.getProposalCategoriesData()
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        proposal: {
          ...prevState.proposal,
          [name]: value
        }
      }
    });
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState=> {
      return {
        proposal: {
          ...prevState.proposal,
          proposal_category_id: value
        }
      }
    });
  }

  handleUpdateProposal = (e) => {
    e.preventDefault()
    const { proposal } = this.state;
    this.updateProposal(proposal)
  }

  getProposalCategoriesData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/proposal_categories',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    if (res.data) {
      data = res.data.data.map((item) => {
        const attrs = item.attributes;

        return {
          id: item.id,
          ...attrs
        }
      });
    }

    this.setState({
      proposal_categories: data
    })
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

    this.setState({
      proposal: {
        id: data.id,
        ...data.attributes
      }
    })
  }

  updateProposal = async (proposal) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'PUT',
      endpoint: `v1/wave_citizen/proposals/${proposal.id}/update`,
      payload: {
        proposal
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Datos actualizados exitosamente', '', 'success')
        this.props.history.push(`/admin/proposal/${proposal.id}`)
      },
      errorCallback: (err) => {
        swal({
          title: "Hubo un error",
          text: err.toString(),
          icon: 'error'
        })
      }
    })
  }

  render() {
    return <UpdateProposalForm
      proposalData={this.state.proposal}
      proposalCategoriesData={this.state.proposal_categories}
      currentUser={this.props.currentUser}
      handleUpdateProposal={this.handleUpdateProposal}
      handleSelectChange={this.handleSelectChange}
      handleChange={this.handleChange}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens } = state.session;
  const { currentUser } = state.session;
  return { tokens, currentUser };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProposal);
