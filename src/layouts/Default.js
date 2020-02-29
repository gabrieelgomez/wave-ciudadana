import React, { Component } from "react";
import { Layout } from 'antd';
import Navbar from '../components/layout/Navbar';
import { connect } from 'react-redux';
class DefaultLayout extends Component {

  render() {
    return (
      <Layout className="layout">
        <Navbar
          currentUser={this.props.currentUser}
        />
        {this.props.children}
      </Layout>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps)(DefaultLayout);
