import React from 'react';
import NewProposalCategoryForm from "../../../components/admin/ProposalCategories/New";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewProposalCategory extends React.Component {

  createProposalCategory = async (proposal_category) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/proposal_categories/create',
      payload: {
        proposal_category
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Categoría de Propuesta creada exitosamente', '', 'success')
      }
    })
  }

  render() {
    return <NewProposalCategoryForm
      createProposalCategory={this.createProposalCategory}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewProposalCategory);
