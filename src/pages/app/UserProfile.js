import React from 'react';
import swal from 'sweetalert';
import ProfileForm from '../../components/app/Citizen/ProfileForm';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { StyledCard } from '../../components/styled';
import { SET_CURRENT_USER, SET_TOKENS } from '../../actions/session';
import { api } from '../../services/api';

class CitizenProfile extends React.Component {
  state = {
    citizen: {}
  }

  componentDidMount() {
    const { id, name, nickname, avatar, email, phone, dni, gender } = this.props.currentUser

    console.log(this.props.currentUser)

    this.setState({
      citizen: {
        id,
        name,
        nickname,
        avatar,
        email,
        phone,
        dni,
        gender
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        citizen: {
          ...prevState.citizen,
          [name]: value
        }
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.updateCitizen(this.state.citizen);
  }

  updateCitizen = async (citizen) => {
    const { uid, client, access_token } = this.props.session.tokens;
    const res = await this.props.api({
      method: 'PUT',
      endpoint: `v1/wave_citizen/citizens/${citizen.id}/update`,
      payload: {
        citizen
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => { 
        swal('Datos actualizados exitosamente', '', 'success')
      }
    })

    const data = res.data.data
    const headers = {
      access_token: res.headers['access-token'],
      client: res.headers.client,
      uid: res.headers.uid
    }
    this.props.setTokens(headers);
    this.props.setCurrentUser({id: data.id, ...data.attributes})
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col span={14} offset={5}>
            <StyledCard>
              <ProfileForm citizen={this.state.citizen} updateCitizen={this.handleSubmit} handleChange={this.handleChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CitizenProfile);
