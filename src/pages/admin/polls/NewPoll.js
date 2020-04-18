import React from 'react';
import NewPollForm from "../../../components/admin/Polls/New";
import PollService from '../../../services/api/poll';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class NewPoll extends React.Component {

  state = {
    poll_categories: []
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
    this.getCategories()
  }

  getCategories = async () => {
    const {tokens} = this.props;
    const data = await this.service.getCategories({tokens})
    this.setState({
      poll_categories: data
    })
  }

  createPoll = (poll) => {
    const {tokens} = this.props;
    const payload = {
      poll: poll
    }

    const successCallback = () => {
      swal('Encuesta creada exitosamente', '', 'success')
      this.props.history.push(`/admin/polls`)
    }

    const errorCallback = (err) => {
      swal({
        title: "Hubo un error",
        text: err.toString(),
        icon: 'error'
      })
    }

    this.service.create({payload, tokens, successCallback, errorCallback})
  }

  render() {
    return <NewPollForm
      createPoll={this.createPoll}
      pollCategories={this.state.poll_categories}
      currentUser={this.props.currentUser}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);
