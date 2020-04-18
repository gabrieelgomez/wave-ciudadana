import React from 'react';
import { Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProfileForm from '../../components/app/User/ProfileForm';
import { SET_CURRENT_USER, SET_TOKENS } from '../../actions/session';
import swal from 'sweetalert';
import {api} from '../../services/api';

const StyledCard = styled(Card)`
  padding: 0 50px;
  h1 {
    font-weight: 700;
    margin-top: 30px;
  }
`

class UserProfile extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    const {
      id,
      name,
      lastname,
      nickname,
      avatar,
      email,
      phone_one,
      phone_two,
      dni,
      gender
    } = this.props.currentUser

    this.setState({
      user: {
        id,
        name,
        lastname,
        nickname,
        avatar,
        email,
        phone_one,
        phone_two,
        dni,
        gender
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.updateUser(this.state.user);
  }

  updateUser = async (user) => {
    const { uid, client, access_token } = this.props.session.tokens;
    const res = await this.props.api({
      method: 'PUT',
      endpoint: `v1/users/${user.id}/update`,
      payload: {
        user
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => { 
        swal('Datos actualizados exitosamente', '', 'success')
      }
    })
    console.log(res)
    this.props.setTokens(res.headers);
    this.props.setCurrentUser(res.data.data)
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col span={14} offset={5}>
            <StyledCard>
              <ProfileForm user={this.state.user} updateUser={this.handleSubmit} handleChange={this.handleChange}/>
            </StyledCard>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tokens, currentUser } = state.session;
  return {
    currentUser: currentUser,
    session: { tokens }
  }
}

const mapDispatchToProps = {
  setTokens: SET_TOKENS,
  setCurrentUser: SET_CURRENT_USER,
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
