import React from 'react';
import { StyledCard } from '../../styled';
import PollCategoryForm from './Form';

class UpdatePollForm extends React.Component {

  render() {
    const {pollCategories, currentUser} = this.props;
    return (
      <div className="admin-container">
        <h1>Actualizar Encuesta</h1>
        <StyledCard>
          <PollCategoryForm
            data={this.props.pollData}
            pollCategories={pollCategories}
            currentUser={currentUser}
            handleSubmit={this.props.handleUpdatePoll}
            handleSelect={this.props.handleSelectChange}
            handleChange={this.props.handleChange}
            datePickerChange={this.props.datePickerChange}
            addField={this.props.addField}
            itemshandleRemove={this.props.itemshandleRemove}
            itemshandleChange={this.props.itemshandleChange}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdatePollForm;
