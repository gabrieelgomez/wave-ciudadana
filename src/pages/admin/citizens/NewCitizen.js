import React from 'react';
import NewCitizenForm from "../../../components/admin/Citizens/New";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewCitizen extends React.Component {
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
      data = res.data.data.map((item) => {
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

  createCitizen = async (citizen) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/citizens/create',
      payload: {
        user: {
          ...citizen
        },
        citizen
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Usuario y ciudadano creados exitosamente', '', 'success')
        this.props.history.push(`/admin/citizens`)
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
    return <NewCitizenForm
      createCitizen={this.createCitizen}
      typeCandidatesData={this.state.type_candidates}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewCitizen);
