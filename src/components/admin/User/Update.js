import React from 'react';
import { StyledCard } from '../../styled';
import UserForm from './Form';

class UpdateUserForm extends React.Component {

  render() {

    return (
      <div className="admin-container">
        <h1>Actualizar usuario admin</h1>
        <StyledCard>
          <UserForm 
            data={this.props.userData}
            handleSubmit={this.props.updateUser}
            handleChange={this.props.handleChange}
            handleSelect={this.props.handleSelect}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdateUserForm;