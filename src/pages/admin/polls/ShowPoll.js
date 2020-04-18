import React from 'react';
import PollShowCard from "../../../components/admin/Polls/Show";
import PollService from '../../../services/api/poll';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class ShowPoll extends React.Component {

  state = {
    poll: {},
    poll_category: {},
    poll_user: {}
  }

  componentDidMount() {
    this.pollID = this.props.match.params.id
    this.service = new PollService(this.props.api)
    this.getPoll(this.pollID)
  }

  getPoll = async (id) => {
    const { tokens } = this.props;
    const res = await this.service.getOne({tokens, id})
    const data = res.data.data;
    const pollData = data.attributes

    this.setState({
      poll: {
        id: data.id,
        ...pollData
      },
      poll_category: {
        name: pollData.poll_category.name
      },
      poll_user: {
        ...pollData.user
      }
    })
  }

  deletePoll = async (id) => {
    const {tokens} = this.props;

    const successCallback = () => {
      swal(`Encuesta eliminada`, {
        icon: "warning",
      }).then(()=> {
        this.props.history.push('/admin/polls');
      });
    }

    const errorCallback = (err) => {
      swal(`Hubo un error, no se ha podido eliminar`, {
        icon: "error",
      })
    }

    this.service.delete({id, tokens, successCallback, errorCallback})
  }

  handleDelete = (e) => {
    e.preventDefault();
    swal({
      title: "¿Estás seguro de eliminar?",
      text: "Si elimina este record, afectará todos los subrecords que han sido creados a partir de él, siendo eliminados también",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deletePoll(this.pollID)
      } else {
        swal(`Encuesta está a salvo`);
      }
    });
  }

  render() {
    return <PollShowCard
      poll={this.state.poll}
      poll_category={this.state.poll_category}
      poll_user={this.state.poll_user}
      handleDelete={this.handleDelete}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens } = state.session;
  return { tokens };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPoll);
