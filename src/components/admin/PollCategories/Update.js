import React from 'react';
import { StyledCard } from '../../styled';
import PollCategoryForm from './Form';

class UpdatePollCategoryForm extends React.Component {

  render() {

    return (
      <div className="admin-container">
        <h1>Actualizar categoría de encuesta</h1>
        <StyledCard>
          <PollCategoryForm
            data={this.props.poll_categoryData}
            countriesData={this.props.countriesData}
            handleSubmit={this.props.handleUpdatePollCategory}
            handleSelect={this.props.handleSelectChange}
            handleChange={this.props.handleChange}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdatePollCategoryForm;
