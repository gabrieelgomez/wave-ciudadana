import React from 'react';
import CitizenShowCard from "../../components/admin/Citizens/Show";
import { connect } from 'react-redux';
import { api } from '../../services/api';

class ShowCitizen extends React.Component {

  state = {
    citizen: {}
  }

  componentDidMount() {
    this.citizenID = this.props.match.params.id
    this.getCitizenData(this.citizenID)
  }

  getCitizenData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/citizens/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data
    const userData = data.attributes.user
    delete userData.id

    this.setState({
      citizen: {
        id: data.id,
        status_citizen: data.attributes.status_citizen,
        ...userData,
      }
    })
  }

  render() {
    return <CitizenShowCard
      citizen={this.state.citizen}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowCitizen);
