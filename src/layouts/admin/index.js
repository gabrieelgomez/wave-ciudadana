import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import AdminSider from '../../components/admin/layout/Sider';
import '../../assets/scss/Admin.scss';

class DefaultAdminLayout extends Component {

  render() {

    return (
      <Layout className='layout'>
        <Row>
          <Col span={5}>
            <AdminSider />
          </Col>
          <Col span={19}>
            {this.props.children}
          </Col>
        </Row>
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