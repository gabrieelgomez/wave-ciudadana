import React from 'react';
import TypeCandidateShowCard from "../../../components/admin/TypeCandidates/Show";
import { connect } from 'react-redux';
import { api } from '../../../services/api';

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

  render() {
    return <TypeCandidateShowCard
      type_candidate={this.state.type_candidate}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowTypeCandidate);
