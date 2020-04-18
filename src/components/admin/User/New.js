import React from 'react';
import { StyledCard } from '../../styled';
import UserForm from './Form';

class NewUserForm extends React.Component {
  state = {
    user: {
      name: '',
      lastname: '',
      nickname: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone_one: '',
      phone_two: '',
      dni: '',
      gender: '',
      roles_attributes: [
        {
          name: 'admin'
        }
      ]
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
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

  handleCreateUser = (e) => {
    e.preventDefault()
    const { password, password_confirmation } = this.state;
    if (password !== password_confirmation) {
        alert("Contraseñas no coinciden");
    } else {
      const { user } = this.state;
      this.props.createUser(user)
    }
  }

  render() {
    const { user } = this.state
    return (
      <div className="admin-container">
        <h1>Crear nuevo usuario admin</h1>
        <StyledCard>
          <UserForm 
            data={user}
            handleSubmit={this.handleCreateUser}
            handleChange={this.handleChange}
            handleSelect={this.handleSelect}
          />
        </StyledCard>
      </div>
    )
  }
}

export default NewUserForm;