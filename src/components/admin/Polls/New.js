import React from 'react';
import { Card } from 'antd';
import PollForm from './Form';
import moment from 'moment';

class NewPollForm extends React.Component {
  state = {
    poll: {
      title: '',
      description: '',
      poll_category_id: '',
      due_date: ''
    }
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        poll: {
          ...prevState.poll,
          poll_category_id: value
        }
      }
    });
  }

  datePickerChange = (date) => {
    var datepickerDate = moment(date).format('YYYY-MM-DD');
    var proposedDate = datepickerDate + "T00:00:00.000Z";
    this.setState(prevState => {
      return {
        poll: {
          ...prevState.poll,
          due_date: proposedDate
        }
      }
    });
  }

  handleCreatePoll = (e) => {
    e.preventDefault()
    const { poll } = this.state;
    this.props.createPoll(poll)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        poll: {
          ...prevState.poll,
          [name]: value
        }
      }
    });
  }

  render() {
    const {
      poll
    } = this.state;

    const {pollCategoriesData} = this.props;
    return (
      <div className="admin-container">
        <h1>Crear nueva propuesta</h1>
        <Card>
          <PollForm
            handleSelect={this.handleSelectChange}
            handleSubmit={this.handleCreatePoll}
            handleChange={this.handleChange}
            datePickerChange={this.datePickerChange}
            data={poll}
            pollCategoriesData={pollCategoriesData}
          >
          </PollForm>
        </Card>
      </div>
    )
  }
}

export default NewPollForm;
