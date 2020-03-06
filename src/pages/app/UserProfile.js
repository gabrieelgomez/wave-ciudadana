import React from 'react';
import { Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProfileForm from '../../components/app/User/profileForm';

const StyledCard = styled(Card)`
  padding: 0 50px;
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
            <StyledCard>
              <ProfileForm />
            </StyledCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(UserProfileScreen);
