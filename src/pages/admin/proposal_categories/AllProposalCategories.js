import React from 'react';
import AdminProposalCategories from "../../../components/admin/ProposalCategories";
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class AllProposalCategories extends React.Component {

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
      data = res.data.data.map((item, iAdminProposalCategoriesdx) => {
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

  render() {
    return <AdminProposalCategories
      proposal_categories={this.state.proposal_categories}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllProposalCategories);
