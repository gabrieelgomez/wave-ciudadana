import React from 'react';
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
    poll: {},
    poll_categories: []
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
    this.pollID = this.props.match.params.id
    this.getPoll(this.pollID)
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
    console.log(poll)

    this.setState({
      poll: poll
    })
  }

  updatePoll = (poll) => {
    const {tokens} = this.props;
    const payload = {
      poll: {
        ...poll,
        items_attributes: poll.items
      }
    }

    const successCallback = () => {
      swal('Datos actualizados exitosamente', '', 'success')
      this.props.history.push(`/poll/${poll.id}`)
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

  render() {
    const { poll } = this.state;
    const pollCategories = this.state.poll_categories;

    return (
      <div className="container page">
        <HeaderPage title={poll.title} img={headerImg} subtitle="Encuesta" />
        <Row>
          <Col xs={{ span: 22, offset: 1 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
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