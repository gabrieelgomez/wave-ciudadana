import React from 'react';
import PollService from '../../../services/api/poll';
import PollInfo from '../Polls/Info';
import swal from 'sweetalert'

class List extends React.Component {

  componentDidMount() {
    this.service = new PollService(this.props.api)
  }

  removePoll = async (id) => {
    const { tokens } = this.props;

    const successCallback = () => {
      swal(`Encuesta eliminada`, {
        icon: "warning",
      }).then(()=> {
        window.location.reload()
      });
    }

    const errorCallback = (err) => {
      swal(`Hubo un error, no se ha podido eliminar`, {
        icon: "error",
      })
    }

    this.service.delete({id, tokens, successCallback, errorCallback})
  }

  handleRemove = (id) => {
    swal({
      title: "¿Estás seguro de eliminar?",
      text: "Si elimina este record, afectará todos los subrecords que han sido creados a partir de él, siendo eliminados también",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.removePoll(id)
      } else {
        swal(`Encuesta está a salvo`);
      }
    });
  }

  render() {
    const { api, tokens, currentUser, polls } = this.props;

    return (
      <div>
        {polls !== undefined && polls.map((poll)=> {
          return (
            <PollInfo
              key={poll.id}
              api={api}
              tokens={tokens}
              currentUser={currentUser}
              item={poll}
              handleRemove={this.handleRemove}
            />
          )
        })}
      </div>
    )
  }
}

export default List;