import React from 'react';
import NewTypeCandidateForm from "../../../components/admin/TypeCandidates/New";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewTypeCandidate extends React.Component {

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
      data = res.data.data.map((item) => {
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
        this.props.history.push(`/admin/type_candidates`)
      },
      errorCallback: (err) => {
        swal({
          title: "Hubo un error",
          text: err.toString(),
          icon: 'error'
        })
      }
    })
  }

  render() {
    return <NewTypeCandidateForm
      createTypeCandidate={this.createTypeCandidate}
      countriesData={this.state.countries}
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
