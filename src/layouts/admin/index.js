import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import AdminSider from '../../components/admin/layout/Sider';
import '../../assets/scss/Admin.scss';

class DefaultAdminLayout extends Component {

  render() {

    return (
      <Layout>
        <AdminSider path={this.props.location}/>
        <Layout className='layout'>
          {this.props.children}
        </Layout>
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

export default connect(mapStateToProps)(DefaultAdminLayout);