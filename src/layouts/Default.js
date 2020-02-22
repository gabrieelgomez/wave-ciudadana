import React, { Component } from "react";
import { Layout } from 'antd';
import Navbar from '../components/layout/Navbar';
import { connect } from 'react-redux';
class DefaultLayout extends Component {

  render() {
    return (
      <Layout className="layout">
        <Navbar
          userInfo={this.props.currentUser}
        />
        {this.props.children}
      </Layout>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

DefaultLayout = connect(
  mapStateToProps
)(DefaultLayout);

export default DefaultLayout;
