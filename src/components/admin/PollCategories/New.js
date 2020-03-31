import React from 'react';
import { Card } from 'antd';
import PollCategoryForm from './Form';

class NewPollCategoryForm extends React.Component {
  state = {
    poll_category: {
      name: '',
      country_id: ''
    }
  }

  handleCreatePollCategory = (e) => {
    e.preventDefault()
    const { poll_category } = this.state;
    this.props.createPollCategory(poll_category)
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        poll_category: {
          ...prevState.poll_category,
          country_id: value
        }
      }
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        poll_category: {
          ...prevState.poll_category,
          [name]: value
        }
      }
    });
  }

  render() {
    const {
      poll_category
    } = this.state;

    const { countriesData } = this.props;

    return (
      <div className="admin-container">
        <h1>Crear nueva categoría de encuesta</h1>
        <Card>
          <PollCategoryForm
            handleSubmit={this.handleCreatePollCategory}
            handleChange={this.handleChange}
            handleSelect={this.handleSelectChange}
            data={poll_category}
            countriesData={countriesData}
          >
          </PollCategoryForm>
        </Card>
      </div>
    )
  }
}

export default NewPollCategoryForm;
