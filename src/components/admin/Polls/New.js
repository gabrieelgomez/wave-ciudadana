import React from 'react';
import { StyledCard } from '../../styled';
import PollForm from './Form';
import moment from 'moment';

class NewPollForm extends React.Component {
  state = {
    poll: {
      title: '',
      description: '',
      due_date: '',
      poll_category_id: '',
      items_attributes: []
    }
  }

  addField = () => {
    this.setState(prevState => {
      return {
        poll: {
          ...prevState.poll,
          items_attributes: [...prevState.poll.items_attributes, { title: "" }]
        }
      }
    })
  }

  itemshandleChange = (e, i) => {
    const items = this.state.poll.items_attributes;
    items[i].title = e.target.value;

    this.setState(prevState=> {
      return {
        poll: {
          ...prevState.poll,
          items_attributes: this.state.poll.items_attributes
        }
      }
    })
  }

  itemshandleRemove = (i) => {
    const items = this.state.poll.items_attributes;
    items.splice(i,1);

    this.setState(prevState=> {
      return {
        poll: {
          ...prevState.poll,
          items_attributes: items
        }
      }
    })
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
    const { poll } = this.state;

    const {pollCategories} = this.props;
    return (
      <div className="admin-container">
        <h1>Crear nueva propuesta</h1>
        <StyledCard>
          <PollForm
            handleSelect={this.handleSelectChange}
            handleSubmit={this.handleCreatePoll}
            handleChange={this.handleChange}
            datePickerChange={this.datePickerChange}
            itemshandleChange={this.itemshandleChange}
            itemshandleRemove={this.itemshandleRemove}
            addField={this.addField}
            data={poll}
            pollCategories={pollCategories}
          >
          </PollForm>
        </StyledCard>
      </div>
    )
  }
}

export default NewPollForm;
