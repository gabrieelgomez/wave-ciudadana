import React from 'react';
import PollInfo from '../../../components/app/Polls/Info';
import PollService from '../../../services/api/poll';
import HeaderPage from '../../../components/app/HeaderPage';
import headerImg from '../../../assets/img/icons/vote.svg';
import CreateComment from '../../../components/app/Comments/Create';
import swal from 'sweetalert'
import { Row, Col } from 'antd';
import { StyledCard } from '../../../components/styled';
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import ListComments from '../../../components/app/Polls/ListComments';

class Show extends React.Component {
  state = {
    poll: {}
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
    this.pollID = this.props.match.params.id
    this.getPoll(this.pollID)
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

  removePoll = async (id) => {
    const { tokens } = this.props;

    const successCallback = () => {
      swal(`Encuesta eliminada`, {
        icon: "warning",
      }).then(()=> {
        this.props.history.push('/my-polls');
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
    const { poll } = this.state;
    const { api, tokens, currentUser} = this.props;

    return (
      <div className="container page">
        <HeaderPage title={poll.title} img={headerImg} subtitle="Encuesta" />
        <Row>
          <Col xs={{ span: 22, offset: 1 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
            <PollInfo
              api={api}
              tokens={tokens}
              currentUser={currentUser}
              item={poll}
              handleRemove={this.handleRemove}
            />
            <StyledCard>
              <CreateComment
                api={api}
                tokens={tokens}
                poll_id={poll.id}
              />
            </StyledCard>
            <ListComments
              poll={poll}
              api={api}
              tokens={tokens}
              currentUser={currentUser}
            />
          </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(Show);