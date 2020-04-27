import React, { Component } from "react";
import { Layout } from 'antd';
import Navbar from '../../components/app/layout/Navbar';
import { connect } from 'react-redux';
import '../../assets/scss/App.scss';

class DefaultAppLayout extends Component {

  render() {
    const {
      currentUser, tokens
    } = this.props;
    console.log(this.props)

    return (
      <Layout className="layout">
        <Navbar
          currentUser={currentUser}
          tokens={tokens}
          history={this.props.history}
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