import React from 'react';
import { Row, Col, Avatar, List } from 'antd';
import { connect } from 'react-redux';
import { StyledCard } from '../../components/styled';
import LinkButton from '../../components/common/ui/LinkButton';
import Banner from '../../components/app/Banner';
import Box from '../../components/app/Box';

class Home extends React.Component {
  render() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      // const { name, lastname, email, nickname } = currentUser;
    }

    return (
      <div>
        { currentUser ? (
          <div className="feed">
            <Row>
              <Col offset={1} span={6}>
                <StyledCard>
                  <div className="feed-profile-header">
                    <Avatar size={30} src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
                    {/* <span className="nickname">{ nickname }</span> */}
                  </div>
                  <List>
                    {/* <List.Item><strong>Nombre:</strong> {name} {lastname}</List.Item> */}
                    {/* <List.Item><strong>Email:</strong> {email}</List.Item> */}
                  </List>
                  <LinkButton action="/profile" name="Ver perfil"/>
                </StyledCard>
              </Col>
              <Col span={10}>
                <Box />
              </Col>
              <Col span={6}></Col>
            </Row>
          </div>
        ): (
          <Banner />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state.session;
  return {
    currentUser: currentUser
  }
}

export default connect(mapStateToProps)(Home);