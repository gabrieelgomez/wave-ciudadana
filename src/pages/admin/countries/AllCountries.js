import React from 'react';
import AdminCountries from "../../../components/admin/Countries";
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class AllCountries extends React.Component {

  state = {
    countries: []
  }

  componentDidMount() {
    this.getCountriesData()
  }

  getCountriesData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/countries',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    if (res.data) {
      data = res.data.data.map((item, iAdminCountriesdx) => {
        const attrs = item.attributes;

        return {
          id: item.id,
          ...attrs
        }
      });
    }

    this.setState({
      countries: data
    })
  }

  render() {
    return <AdminCountries
      countries={this.state.countries}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllCountries);
