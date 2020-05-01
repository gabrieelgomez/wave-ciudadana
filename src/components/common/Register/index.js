import React from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import { SET_CURRENT_USER, SET_TOKENS } from '../../../actions/session';
import swal from 'sweetalert';
import RegisterForm from './Form';
const { TabPane } = Tabs;

class Register extends React.Component {
  state = {
    name: '',
    lastname: '',
    nickname: '',
    email: '',
    password: '',
    password_confirmation: '',
    roles_attributes: [
      {
        name: 'client'
      }
    ],
    citizen: {
      status_citizen: 'citizen'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  statusCitizenChange = (e) => {
    this.setState({
      citizen: {
        status_citizen: e
      }
    });
  }

  registerUser = (e) => {
    e.preventDefault();

    const {
      cb
    } = this.props;

    const {
      name, lastname, nickname,
      email, password, password_confirmation,
      citizen
    } = this.state;

    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    };

    axios({
      method: 'POST',
      url: `https://api.ibigwave.com/v1/auth`,
      headers: headers,
      data: {
        name,
        lastname,
        nickname,
        email,
        password,
        password_confirmation,
        citizen
      },
    })
    .then((response) => {
      const { client, uid } = response.headers

      const tokens = {
        access_token: response.headers['access-token'],
        client, uid
      }

      this.props.setTokens(tokens);

      cb();

      if (response.status === 200) {
        this.props.setCurrentUser(response.data.data.citizen);

        swal("Registrado exitosamente", "", "success");
      } else {
        swal("Ha ocurrido un error, intenta de nuevo", "", "warning");
      }
    })
    .catch((error) => {
      console.error('error: ', error)
      let errorMessage = error.response ? error.response.data.errors.full_messages : 'Algo salió mal!'
      swal(`${errorMessage}`, "", "error");
    });
  }

  render() {
    return (
      <div className="login-box">
        <h1 style={{
          textTransform: 'uppercase',
          color: '#ff663b',
          fontWeight: 700,
          marginBottom: '30px'
        }}>Registro</h1>
        <Tabs defaultActiveKey={this.state.status_citizen} onChange={this.statusCitizenChange}>
          <TabPane tab="Ciudadano" key="citizen"></TabPane>
          <TabPane tab="Candidato" key="candidate"></TabPane>
        </Tabs>
        <RegisterForm
          handleChange={this.handleChange}
          registerUser={this.registerUser}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCurrentUser: SET_CURRENT_USER,
  setTokens: SET_TOKENS
}

export default connect(null, mapDispatchToProps)(Register);