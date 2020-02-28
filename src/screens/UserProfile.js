import React from 'react';
import { Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProfileForm from '../components/User/profileForm';

const StyledCard = styled(Card)`
  text-align: center;

  h1 {
    font-weight: 700;
    margin-top: 30px;
  }
`

class UserProfileScreen extends React.Component {

  render() {
    return (
      <div className="container">
        <Row>
          <Col span={14} offset={5}>
            <StyledCard mn={false}>
              <ProfileForm />
            </StyledCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(UserProfileScreen);
