import React from 'react';
import PollInfo from '../../../components/app/Polls/Info';
import PollService from '../../../services/api/poll';
import HeaderPage from '../../../components/app/HeaderPage';
import headerImg from '../../../assets/img/icons/vote.svg';
import swal from 'sweetalert'
import { Row, Col, Form } from 'antd';
import { StyledTextAreaFeed, StyledCard, StyledButton } from '../../../components/styled';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

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
      })
    }

    const errorCallback = (err) => {
      swal(`Hubo un error, no se ha podido eliminar`, {
        icon: "error",
      })
    }

    this.service.delete({id, tokens, successCallback, errorCallback})
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
              type={poll.type}
              removePoll={this.removePoll}
            />
            <StyledCard>
              <Form.Item>
                <StyledTextAreaFeed placeholder="Comenta..."/>
                <StyledButton>Comentar</StyledButton>
              </Form.Item>
            </StyledCard>
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