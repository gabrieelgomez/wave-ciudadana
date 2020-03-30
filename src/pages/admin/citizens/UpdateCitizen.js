import React from 'react';
import UpdateCitizenForm from "../../../components/admin/Citizens/Update";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class UpdateCitizen extends React.Component {

  state = {
    citizen: {}
  }

  componentDidMount() {
    const citizenID = this.props.match.params.id;
    this.getCitizenData(citizenID)
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

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState=> {
      return {
        citizen: {
          ...prevState.citizen,
          status_citizen: value
        }
      }
    });
  }

  handleUpdateCitizen = (e) => {
    e.preventDefault()
    const { citizen } = this.state;
    this.updateCitizen(citizen)
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
      },
      errorCallback: (err) => {
        swal({
          title: "Hubo un eror",
          text: err.toString(),
          icon: 'error'
        })
      }
    })
    console.log(res)
  }

  render() {
    return <UpdateCitizenForm
      citizenData={this.state}
      handleUpdateCitizen={this.handleUpdateCitizen}
      handleSelectChange={this.handleSelectChange}
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
