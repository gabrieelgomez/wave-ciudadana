import React from 'react';
import { Form, Tabs } from 'antd';
import { StyledTextAreaFeed, StyledInput, StyledButton } from '../../styled';
import CustomModal from '../../common/ui/Modal';
import PollForm from '../Polls/Form';
import PollService from '../../../services/api/poll';
import swal from 'sweetalert';
const { TabPane }  = Tabs;

class QuickPostBox extends React.Component {
  state = {
    poll: {
      visible: false
    }
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
    this.pollFormRef = React.createRef();
  }

  handleClose = () => {
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

  createPoll = (poll) => {
    const {tokens} = this.props;
    const payload = {
      poll: {
        ...poll
      }
    }

    const successCallback = () => {
      this.handleClose()
      // swal('Encuesta creada exitosamente', '', 'success')
      swal('Encuesta creada exitosamente', '', 'success').then(() => {
        this.props.getPolls()
      })
    }

    const errorCallback = (err) => {
      this.handleClose()
      swal({
        title: "Hubo un error",
        text: err.toString(),
        icon: 'error'
      })
    }

    this.service.create({payload, tokens, successCallback, errorCallback})
  }
  
  handleSubmit = () => {
    this.pollFormRef.current.click()
  }

  render() {
    return (
      <div style={{marginBottom: '15px'}}>
        <div className="quick-post">
          <div className="quick-post-header">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Encuestas" key="1">
                <Form.Item>
                  <StyledInput
                    onClick={this.showModal}
                    placeholder="Haz una pregunta"
                    bgcolor="#fcfcfd"
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
        <CustomModal
          visible={this.state.poll.visible}
          handleClose={this.handleClose}
          isScrollable
          styles={{maxHeight: '60vh'}}
          footer={[
            <div key="submit" className="quick-post-footer">
              <StyledButton onClick={this.handleSubmit}>Publicar</StyledButton>
            </div>
          ]}
        >
          <PollForm
            pollFormRef={this.pollFormRef}
            handleSubmit={this.createPoll}
            categories={this.props.pollCategories}
          />
        </CustomModal>
      </div>
    )
  }
}

export default QuickPostBox;