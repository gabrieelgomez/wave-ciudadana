import React from 'react';
import { Form, Tabs } from 'antd';
import { StyledTextAreaFeed, StyledInput } from '../styled';
import PollModal from '../app/Polls/Modal';
const { TabPane }  = Tabs;

class Box extends React.Component {
  state = {
    poll: {
      visible: false
    }
  }

  callback = (key) =>{
    console.log(key);
  }

  handleClose = e => {
    this.setState(prevState =>{
      return {
        poll: {
          visible: false
        }
      }
    });
  };

  showModal = () => {
    this.setState(prevState =>{
      return {
        poll: {
          visible: true
        }
      }
    });
  };

  render() {
    return (
      <div>
        <div className="quick-post">
          <div className="quick-post-header">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              <TabPane tab="Encuestas" key="1">
                <Form.Item>
                  <StyledInput
                    onClick={this.showModal}
                    placeholder="Haz una pregunta"
                  ></StyledInput>
                </Form.Item>
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
        </div>
        <PollModal 
          visible={this.state.poll.visible}
          handleClose={this.handleClose}
        />
      </div>
    )
  }
}

export default Box;