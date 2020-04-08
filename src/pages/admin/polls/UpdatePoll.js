import React from 'react';
import UpdatePollForm from "../../../components/admin/Polls/Update";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';
import moment from 'moment';

class UpdatePoll extends React.Component {

  state = {
    poll: {},
    poll_categories: []
  }

  componentDidMount() {
    const pollID = this.props.match.params.id;
    this.getPollData(pollID)
    this.getPollCategoriesData()
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

  getPollCategoriesData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/poll_categories',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    if (res.data) {
      data = res.data.data.map((item) => {
        const attrs = item.attributes;

        return {
          id: item.id,
          ...attrs
        }
      });
    }

    this.setState({
      poll_categories: data
    })
  }

  getPollData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/polls/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data

    this.setState({
      poll: {
        id: data.id,
        ...data.attributes
      }
    })
  }

  updatePoll = async (poll) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'PUT',
      endpoint: `v1/wave_citizen/polls/${poll.id}/update`,
      payload: {
        poll
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Datos actualizados exitosamente', '', 'success')
        this.props.history.push(`/admin/poll/${poll.id}`)
      },
      errorCallback: (err) => {
        swal({
          title: "Hubo un error",
          text: err.toString(),
          icon: 'error'
        })
      }
    })
  }

  render() {
    return <UpdatePollForm
      pollData={this.state.poll}
      pollCategoriesData={this.state.poll_categories}
      currentUser={this.props.currentUser}
      handleUpdatePoll={this.handleUpdatePoll}
      handleSelectChange={this.handleSelectChange}
      datePickerChange={this.datePickerChange}
      handleChange={this.handleChange}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens } = state.session;
  const { currentUser } = state.session;
  return { tokens, currentUser };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePoll);
