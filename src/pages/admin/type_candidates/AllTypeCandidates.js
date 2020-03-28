import React from 'react';
import AdminTypeCandidates from "../../../components/admin/TypeCandidates";
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class AllTypeCandidates extends React.Component {

  state = {
    type_candidates: []
  }

  componentDidMount() {
    this.getTypeCandidatesData()
  }

  getTypeCandidatesData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/type_candidacies',
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
      type_candidates: data
    })
  }

  render() {
    return <AdminTypeCandidates
      type_candidates={this.state.type_candidates}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllTypeCandidates);
