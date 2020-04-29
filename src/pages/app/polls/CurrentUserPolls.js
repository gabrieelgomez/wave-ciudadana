import React from 'react';
import PollInfo from '../../../components/app/Polls/Info';
import PollService from '../../../services/api/poll';
import HeaderPage from '../../../components/app/HeaderPage';
import headerImg from '../../../assets/img/icons/polls.svg';
import swal from 'sweetalert'
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class CurrentUserPolls extends React.Component {
  state = {
    polls: []
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
    this.getPolls()
  }

  getPolls = async () => {
    const { tokens } = this.props;
    const data = await this.service.getAll({tokens})

    const {currentUser} = this.props;

    const currentUserPolls = data.filter(poll => poll.citizen_id === currentUser.id )
    
    this.setState({
      polls: currentUserPolls
    })
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
    const { api, currentUser } = this.props;
    const polls = this.state.polls;

    return (
      <div className="container page">
        <Row gutter={16}>
          <HeaderPage title="Mis encuestas" img={headerImg} />
          { polls.length !== 0 ? (
            polls.map((item, i)=> {
              return (
                <Col key={i} xs={24} md={8} lg={8}>
                  <PollInfo
                    api={api}
                    item={item}
                    currentUser={currentUser}
                    handleRemove={this.handleRemove}
                    />
                </Col>
              )
            })
          ) : ( <p>No tienes encuestas </p> )
          }
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { tokens, currentUser } = state.session;
  return { tokens, currentUser };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserPolls);