import React from 'react';
import NewProposalForm from "../../../components/admin/Proposals/New";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewProposal extends React.Component {

  state = {
    proposal_categories: []
  }

  componentDidMount() {
    this.getProposalCategoriesData()
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

  createProposal = async (proposal) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/proposals/create',
      payload: {
        proposal: {
          ...proposal
        }
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Propuesta creada exitosamente', '', 'success')
        this.props.history.push(`/admin/proposals`)
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
    return <NewProposalForm
      createProposal={this.createProposal}
      proposalCategoriesData={this.state.proposal_categories}
      currentUser={this.props.currentUser}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewProposal);
