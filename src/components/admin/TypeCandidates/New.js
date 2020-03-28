import React from 'react';
import { Form, Input, Col, Card } from 'antd';
import TypeCandidateForm from './Form';

class NewTypeCandidateForm extends React.Component {
  state = {
    type_candidate: {
      name: '',
      country_id: '',
    }
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        type_candidate: {
          ...prevState.type_candidate
        }
      }
    });
  }

  handleCreateTypeCandidate = (e) => {
    e.preventDefault()
    const { type_candidate } = this.state;
    this.props.createTypeCandidate(type_candidate)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        type_candidate: {
          ...prevState.type_candidate,
          [name]: value
        }
      }
    });
  }

  render() {
    const {
      type_candidate
    } = this.state;

    return (
      <div className="admin-container">
        <h1>Crear nuevo tipo de candidatura</h1>
        <Card>
          <TypeCandidateForm
            handleSelect={this.handleSelectChange}
            handleSubmit={this.handleCreateTypeCandidate}
            handleChange={this.handleChange}
            data={type_candidate}
          >
          </TypeCandidateForm>
        </Card>
      </div>
    )
  }
}

export default NewTypeCandidateForm;
