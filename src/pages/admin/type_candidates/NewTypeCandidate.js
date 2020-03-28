import React from 'react';
import NewTypeCandidateForm from "../../../components/admin/TypeCandidates/New";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewTypeCandidate extends React.Component {

  createTypeCandidate = async (type_candidate) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/type_candidacies/create',
      payload: {
        type_candidacy: {
          ...type_candidate
        },
        type_candidate
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Tipo de candidatura creada exitosamente', '', 'success')
      }
    })
  }

  render() {
    return <NewTypeCandidateForm
      createTypeCandidate={this.createTypeCandidate}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewTypeCandidate);
