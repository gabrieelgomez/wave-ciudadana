import React from 'react';
import CountryShowCard from "../../../components/admin/Countries/Show";
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class ShowCountry extends React.Component {

  state = {
    country: {}
  }

  componentDidMount() {
    this.countryID = this.props.match.params.id
    this.getCountryData(this.countryID)
  }

  getCountryData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/countries/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data
    const countryData = data.attributes

    this.setState({
      country: {
        id: data.id,
        ...countryData
      }
    })
  }

  render() {
    return <CountryShowCard
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowCountry);
