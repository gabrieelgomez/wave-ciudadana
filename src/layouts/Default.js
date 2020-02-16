import React, { Component } from "react";
import { Layout } from 'antd';
import Navbar from '../components/layout/Navbar';

class DefaultLayout extends Component {

  state = {
    user: null
  }

  setUserInfo = (user) => {
    this.setState({ user });
  }

  render() {
    return (
      <Layout className="layout">
        <Navbar
          cb={this.setUserInfo}
          userInfo={this.state.user}
        />
        {this.props.children}
      </Layout>
    )
  }
};

export default DefaultLayout;