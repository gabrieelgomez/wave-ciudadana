import React from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  text-align: center;

  h1 {
    font-weight: 700;
    margin-top: 30px;
  }
`

class Profile extends React.Component {
  state = {
    name: '',
    lastname: '',
    avatar: '',
    email: '',
    nickname: ''
  }

  componentDidMount() {
    this.currentUserID = this.props.location.pathname.split('/').pop();
    this.getUserData();
  }

  getUserData() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    axios({
      method: 'GET',
      url: `https://api.ibigwave.com/v1/users/${this.currentUserID}`,
      headers: headers
    })
    .then((response) => {
      const data = response.data.data.attributes;
      this.setState({
        name: data.name,
        lastname: data.lastname,
        avatar: data.avatar.url,
        email: data.email,
        nickname: data.nickname
      })
    })
    .catch((error) => {
      console.log(error, 'error being returned')
    });
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col span={14} offset={5}>
            <StyledCard bordered={false}>
              { !this.state.avatar === 'null' ? (
                <Avatar size={150} src={this.state.avatar} />
                ) : (
                  <Avatar size={150} src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/ryan.jpg" />
                )
              }
              <h1>{this.state.name} {this.state.lastname}</h1>
              <span>{this.state.nickname}</span>
            </StyledCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(Profile);