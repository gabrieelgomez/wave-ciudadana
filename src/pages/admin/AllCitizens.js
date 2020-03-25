import React from 'react';
import AdminCitizens from "../../components/admin/Citizens";
import { connect } from 'react-redux';
import { api } from '../../services/api';

class AllCitizens extends React.Component {

  state = {
    citizens: []
  }

  componentDidMount() {
    this.getCitizensData()
  }

  getCitizensData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/citizens',
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
          status_citizen: attrs.status_citizen,
          ...attrs.user
        }
      });
    }

    this.setState({
      citizens: data
    })
  }

  render() {
    return <AdminCitizens
      citizens={this.state.citizens}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllCitizens);
