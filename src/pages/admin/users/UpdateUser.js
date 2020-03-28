import React from 'react';
import UpdateUserForm from "../../../components/admin/User/Update";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class UpdateUser extends React.Component {

  state = {
    user: {
      id: '',
      name: '',
      lastname: '',
      nickname: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone_one: '',
      phone_two: '',
      dni: '',
      gender: ''
    }
  }

  componentDidMount() {
    const userID = this.props.match.params.id;
    this.getUserData(userID)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      }
    });
  }

  handleSelect = (e) => {
    this.setState(prevState=> {
      return {
        user: {
          ...prevState.user,
          gender: e
        }
      }
    });
  }

  handleUpdateUser = (e) => {
    e.preventDefault()
    const { password, password_confirmation } = this.state;
    if (password !== password_confirmation) {
      alert("Contraseñas no coinciden");
    } else {
      this.updateUser(this.state.user)
    }
  }

  getUserData = async (id) => {
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/users/${id}`
    })
    const data = res.data.data;

    this.setState({
      user: {
        id: data.id,
        name: data.attributes.name,
        lastname: data.attributes.lastname,
        nickname: data.attributes.nickname,
        email: data.attributes.email,
        password: data.attributes.password,
        password_confirmation: data.attributes.password_confirmation,
        phone_one: data.attributes.phone_one,
        phone_two: data.attributes.phone_two,
        dni: data.attributes.dni,
        gender: data.attributes.gender
      }
    })
  }

  updateUser = async (user) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'PUT',
      endpoint: `v1/users/${user.id}/update`,
      payload: {
        user
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Datos actualizados exitosamente', '', 'success')
      }
    })
  }

  render() {
    return <UpdateUserForm
      userData={this.state.user}
      updateUser={this.handleUpdateUser}
      handleChange={this.handleChange}
      handleSelect={this.handleSelect}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
