import React from 'react';
import { Form, Input, Col } from 'antd';
import { StyledCard } from '../../styled';
import CitizenForm from './Form';

class NewCitizenForm extends React.Component {
  state = {
    citizen: {
      name: '',
      nickname: '',
      email: '',
      description: '',
      password: '',
      password_confirmation: '',
      roles_attributes: [
        {
          name: 'client'
        }
      ],
      status_citizen: 'citizen',
      type_candidacy_id: ''
    }
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

  handleCreateCitizen = (e) => {
    e.preventDefault()
    const { password, password_confirmation } = this.state;
    if (password !== password_confirmation) {
        alert("Contraseñas no coinciden");
    } else {
      const { citizen } = this.state;
      this.props.createCitizen(citizen)
    }
  }

  render() {
    const {
      citizen
    } = this.state;

    return (
      <div className="admin-container">
        <h1>Crear nuevo ciudadano</h1>
        <StyledCard>
          <CitizenForm
            handleSelectType={this.handleSelectType}
            handleSelectStatus={this.handleSelectStatus}
            handleSubmit={this.handleCreateCitizen}
            handleChange={this.handleChange}
            data={citizen}
            typeCandidatesData={this.props.typeCandidatesData}
          >
            <Col span={12}>
              <Form.Item style={{padding: '0 15px'}}>
                <Input
                  type="password"
                  name="password"
                  value={citizen.password}
                  placeholder="Contraseña"
                  onChange={this.handleChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item style={{padding: '0 15px'}}>
                <Input
                  type="password"
                  name="password_confirmation"
                  value={citizen.password_confirmation}
                  placeholder="Confirmacion de contraseña"
                  onChange={this.handleChange}
                />
              </Form.Item>
            </Col>
          </CitizenForm>
        </StyledCard>
      </div>
    )
  }
}

export default NewCitizenForm;