import React, { Component } from "react";
import { Layout } from 'antd';
import Navbar from '../../components/app/layout/Navbar';
import { connect } from 'react-redux';

class DefaultAppLayout extends Component {

  render() {
    const {
      currentUser, tokens
    } = this.props;

    return (
      <Layout className="layout">
        <Navbar
          currentUser={currentUser}
          tokens={tokens}
        />
        {this.props.children}
      </Layout>
    )
  }
};

const mapStateToProps = (state) => {
  const {
    currentUser, tokens
  } = state.session;

  return {
    currentUser, tokens
  }
}

export default connect(mapStateToProps)(DefaultAppLayout);
