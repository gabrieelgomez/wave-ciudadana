import React from 'react';
import swal from 'sweetalert';
import ProfileForm from '../../components/app/Citizen/ProfileForm';
import HeaderPage from '../../components/app/HeaderPage';
import headerImg from '../../assets/img/icons/userprofile.svg';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { StyledCard } from '../../components/styled';
import { SET_CURRENT_USER, SET_TOKENS } from '../../actions/session';
import { api } from '../../services/api';

class CitizenProfile extends React.Component {
  state = {
    citizen: {},
    type_candidacies: []
  }

  componentDidMount() {
    const { id, name, nickname, avatar, banner, email, phone, description, status_citizen, type_candidacy_id } = this.props.currentUser;

    this.setState({
      citizen: {
        id,
        name,
        banner,
        nickname,
        email,
        avatar,
        phone,
        description,
        status_citizen,
        type_candidacy_id
      }
    })

    this.getTypeCandidacies()
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

  handleSelectStatus = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        citizen: {
          ...prevState.citizen,
          status_citizen: value
        }
      }
    });
  }

  handleSelectType = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        citizen: {
          ...prevState.citizen,
          type_candidacy_id: value
        }
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.updateCitizen(this.state.citizen);
  }

  getAvatarBase64 = (base64) => {
    this.setState(prevState => {
      return {
        citizen: {
          ...prevState.citizen,
          avatar: base64
        }
      }
    });
  }

  getBannerBase64 = (base64) => {
    this.setState(prevState => {
      return {
        citizen: {
          ...prevState.citizen,
          banner: base64
        }
      }
    });
  }

  getTypeCandidacies = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.session.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/type_candidacies',
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
      type_candidacies: data
    })
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
      <div className="container page">
        <Row>
          <HeaderPage title="Mi Perfil" img={headerImg} />
          <Col span={16} offset={4}>
            <StyledCard>
              <ProfileForm
                citizen={this.state.citizen}
                typeCandidacies={this.state.type_candidacies}
                updateCitizen={this.handleSubmit}
                getAvatarBase64={this.getAvatarBase64}
                getBannerBase64={this.getBannerBase64}
                handleChange={this.handleChange}
                handleSelectStatus={this.handleSelectStatus}
                handleSelectType={this.handleSelectType}
              />
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
