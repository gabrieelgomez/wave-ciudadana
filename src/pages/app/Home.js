import React from 'react';
import { Row, Col, Tabs } from 'antd';
import { Form } from 'antd';
import { connect } from 'react-redux';
import Banner from '../../components/app/Banner';
import { StyledTextAreaFeed, StyledButton } from '../../components/styled';
const { TabPane }  = Tabs;

class Home extends React.Component {
  callback(key) {
    console.log(key);
  }

  render() {
    const currentUser = this.props.currentUser;

    return (
      <div>
        { currentUser ? (
          <div className="feed">
            <Row>
              <Col offset={1} span={6}>Profile</Col>
              <Col span={10}>
                <div className="quick-post">
                  <div className="quick-post-header">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                      <TabPane tab="Encuestas" key="1">
                        <Form>
                          <Form.Item>
                            <StyledTextAreaFeed placeholder="Escribe tu encuesta"/>
                          </Form.Item>
                        </Form>
                      </TabPane>
                      <TabPane tab="Propuestas" key="2">
                        <Form>
                          <Form.Item>
                            <StyledTextAreaFeed placeholder="Escribe tu propuesta"/>
                          </Form.Item>
                        </Form>
                      </TabPane>
                    </Tabs>
                  </div>
                  <div className="quick-post-footer">
                    <StyledButton>Publicar</StyledButton>
                  </div>
                </div>
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