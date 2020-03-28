import React from 'react';
import ProposalCategoryShowCard from "../../../components/admin/ProposalCategories/Show";
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class ShowProposalCategory extends React.Component {

  state = {
    proposal_category: {},
    country: {}
  }

  componentDidMount() {
    this.proposal_categoryID = this.props.match.params.id
    this.getProposalCategoryData(this.proposal_categoryID)
  }

  getProposalCategoryData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/proposal_categories/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data
    const proposal_categoryData = data.attributes

    this.setState({
      proposal_category: {
        id: data.id,
        ...proposal_categoryData
      },
      country: {
        name: proposal_categoryData.country.name
      }
    })
  }

  render() {
    return <ProposalCategoryShowCard
      proposal_category={this.state.proposal_category}
      country={this.state.country}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowProposalCategory);
