import React from 'react';
import UpdateCitizenForm from "../../../components/admin/Citizens/Update";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class UpdateCitizen extends React.Component {

  state = {
    citizen: {},
    type_candidates: []
  }

  componentDidMount() {
    const citizenID = this.props.match.params.id;
    this.getCitizenData(citizenID)
    this.getTypeCandidatesData()
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        citizen: {
          ...prevState.citizen,
          [name]: value
        }
      }
    });
  }

  handleSelectStatus = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        citizen: {
          ...prevState.citizen,
          status_citizen: value
        }
      }
    });
  }

  handleSelectType = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        citizen: {
          ...prevState.citizen,
          type_candidacy_id: value
        }
      }
    });
  }

  handleUpdateCitizen = (e) => {
    e.preventDefault()
    const { citizen } = this.state;
    this.updateCitizen(citizen)
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

    this.setState({
      citizen: {
        id: data.id,
        ...data.attributes
      }
    })
  }

  updateCitizen = async (citizen) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'PUT',
      endpoint: `v1/wave_citizen/citizens/${citizen.id}/update`,
      payload: {
        citizen
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Datos actualizados exitosamente', '', 'success')
        this.props.history.push(`/admin/citizen/${citizen.id}`)
      },
      errorCallback: (err) => {
        swal({
          title: "Hubo un eror",
          text: err.toString(),
          icon: 'error'
        })
      }
    })
  }

  render() {
    return <UpdateCitizenForm
      citizenData={this.state}
      typeCandidatesData={this.state.type_candidates}
      handleUpdateCitizen={this.handleUpdateCitizen}
      handleSelectType={this.handleSelectType}
      handleSelectStatus={this.handleSelectStatus}
      handleChange={this.handleChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCitizen);
