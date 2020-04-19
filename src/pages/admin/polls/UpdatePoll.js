import React from 'react';
import UpdatePollForm from "../../../components/admin/Polls/Update";
import PollService from '../../../services/api/poll';
import swal from 'sweetalert';
import moment from 'moment';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class UpdatePoll extends React.Component {
  state = {
    poll: {},
    poll_categories: []
  }

  componentDidMount() {
    const pollID = this.props.match.params.id;
    this.service = new PollService(this.props.api)
    this.getPoll(pollID)
    this.getCategories()
  }

  getCategories = async () => {
    const {tokens} = this.props;
    const data = await this.service.getCategories({tokens})
    this.setState({
      poll_categories: data
    })
  }

  getPoll = async (id) => {
    const { tokens } = this.props;
    const res = await this.service.getOne({tokens, id})
    const data = res.data.data;

    const poll = {
      id: data.id,
      type: data.type,
      ...data.attributes
    }
    
    this.setState({
      poll: poll
    })
  }

  updatePoll = (poll) => {
    const {tokens} = this.props;
    const payload = {
      poll: poll
    }

    const successCallback = () => {
      swal('Datos actualizados exitosamente', '', 'success')
    }

    const errorCallback = (err) => {
      swal({
        title: "Hubo un error",
        text: err.toString(),
        icon: 'error'
      })
    }

    this.service.update({payload, tokens, successCallback, errorCallback})
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

  datePickerChange = (date) => {
    var datepickerDate = moment(date).format('YYYY-MM-DD');
    var formatDate = datepickerDate + "T00:00:00.000Z";
    this.setState(prevState => {
      return {
        poll: {
          ...prevState.poll,
          due_date: formatDate
        }
      }
    });
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState=> {
      return {
        poll: {
          ...prevState.poll,
          poll_category_id: value
        }
      }
    });
  }

  handleUpdatePoll = (e) => {
    e.preventDefault()
    const { poll } = this.state;
    this.updatePoll(poll)
  }

  render() {
    return <UpdatePollForm
      pollData={this.state.poll}
      pollCategories={this.state.poll_categories}
      currentUser={this.props.currentUser}
      handleUpdatePoll={this.handleUpdatePoll}
      handleSelectChange={this.handleSelectChange}
      datePickerChange={this.datePickerChange}
      handleChange={this.handleChange}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens, currentUser } = state.session;
  return { tokens, currentUser };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePoll);
