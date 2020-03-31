import React from 'react';
import AdminProposals from "../../../components/admin/Proposals";
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class AllProposals extends React.Component {

  state = {
    proposals: [],
    proposal_categories: []
  }

  componentDidMount() {
    this.getProposalsData()
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

  getProposalsData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/proposals',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    if (res.data) {
      data = res.data.data.map((item, idx) => {
        const attrs = item.attributes;

        return {
          id: item.id,
          ...attrs
        }
      });
    }

    this.setState({
      proposals: data
    })
  }

  render() {
    return <AdminProposals
      proposals={this.state.proposals}
      proposalCategoriesData={this.state.proposal_categories}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllProposals);
