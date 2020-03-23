import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {BASE_DOMAIN} from '../../../constants';

class AdminUserShow extends React.Component {
  state = {
    user: {
      name: '',
      lastname: '',
      nickname: '',
      email: '',
      phone_one: '',
      phone_two: ''
    }
  }

  componentDidMount() {
    this.userID = this.props.match.params.id
    console.log(this.userID)
    this.getUserData();
  }

  getUserData() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    axios({
      method: 'GET',
      url: `${BASE_DOMAIN}/v1/users/${this.userID}`,
      headers: headers
    })
    .then((response) => {
      const data = response.data.data.attributes;
      this.setState({
        user: {
          name: data.name,
          lastname: data.lastname,
          nickname: data.nickname,
          email: data.email,
          phone_one: data.phone_one,
          phone_two: data.phone_two
        }
      })
    })
    .catch((error) => {
      console.log(error, 'error being returned')
    });
  }
  
  render() {
    const {
      name,
      lastname,
      nickname,
      email,
      phone_one,
      phone_two
    } = this.state.user;

    return (
      <div className="admin-container">
        <Card>
          <Link to={`/admin/user/${this.userID}/update`}><Icon type="edit"/></Link>
          <Descriptions title="Información del Usuario" layout="vertical">
            <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
            <Descriptions.Item label="Apellido">{lastname}</Descriptions.Item>
            <Descriptions.Item label="Usuario">{nickname}</Descriptions.Item>
            <Descriptions.Item label="Email">{email}</Descriptions.Item>
            <Descriptions.Item label="Telefono 1">{phone_one}</Descriptions.Item>
            <Descriptions.Item label="Telefono 2">{phone_two}</Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
    )
  }
}

export default AdminUserShow;