import React from 'react';
import {Card} from 'antd';
import UserForm from './Form';

class UpdateUserForm extends React.Component {

  render() {

    return (
      <div className="admin-container">
        <h1>Actualizar usuario admin</h1>
        <Card>
          <UserForm 
            data={this.props.userData}
            handleSubmit={this.props.updateUser}
            handleChange={this.props.handleChange}
            handleSelect={this.props.handleSelect}
          />
        </Card>
      </div>
    )
  }
}

export default UpdateUserForm;