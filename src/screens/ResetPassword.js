import React, { Component } from 'react';
import { Form, Input, Card, Button } from 'antd';
import axios from 'axios';
import swal from 'sweetalert';
import { BASE_DOMAIN } from '../constants';
import { withRouter } from "react-router-dom";



const Item = Form.Item;

class ResetPassword extends Component {

  state = {
    email: '',
    password: '',
    password_confirmation: '',
    token: '',
    emailIsSent: false,
    isLoading: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  resetPassword = (e) => {
    e.preventDefault();

    console.log('resetPass')
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const {
      password,
      password_confirmation,
      token
    } = this.state;

    axios({
      method: 'POST',
      url: `${BASE_DOMAIN}/v1/auth/password/reset`,
      headers: headers,
      data: {
        password,
        password_confirmation,
        token
      },
    })
    .then((response) => {
      console.log('response: ', response)
      const that = this;
      swal("Password resetted successfully", "", "success").then((value) => {
        that.props.history.push("/");
      });;

    })
    .catch((error) => {
      swal(`${error.response.data.errors}`, "", "error");
    });
  }

  sendResetPassEmail = (e) => {
    e.preventDefault();
    console.log('sendResetPassEmail')
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    axios({
      method: 'POST',
      url: `${BASE_DOMAIN}/v1/auth/password`,
      headers: headers,
      data: {
        email: this.state.email,
      },
    })
    .then((response) => {
      console.log('response: ', response)
      const that = this;
      swal("Email was sent successfully", "", "success").then((value) => {
        that.setState({
          emailIsSent: true
        })
      });;

    })
    .catch((error) => {
      swal(`${error.response.data.errors}`, "", "error");
    });
  }
  render() {

    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
    };

    const {
      emailIsSent
    } = this.state;
    return (
      <div className="container">
        <Card>
          { emailIsSent ? (
              <div>
                <h1>Form with new passwords and token</h1>
                <Form {...layout} onSubmit={this.resetPassword}>
                  <Item label="Password">
                    <Input name="password" onChange={this.handleChange}></Input>
                  </Item>
                  <Item label="Password confirmation">
                    <Input name="password_confirmation" onChange={this.handleChange}></Input>
                  </Item>
                  <Item label="Token">
                    <Input name="token" onChange={this.handleChange}></Input>
                  </Item>
                  <Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Item>
                </Form>
              </div>
            ) : (
              <div>
                <h1 style={{textAlign: 'center'}}>Introduce your email, we will send you an email</h1>
                <Form {...layout} onSubmit={this.sendResetPassEmail}>
                  <Item label="Email">
                    <Input name="email" onChange={this.handleChange}></Input>
                  </Item>
                  <Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Item>
                </Form>
              </div>
            )
          }
        </Card>
      </div>
    );
  }
}

export default withRouter(ResetPassword);
