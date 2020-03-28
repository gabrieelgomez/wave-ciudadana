import React from 'react';
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,.2);

`

class AdminSider extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return (
      <StyledSider
        breakpoint="lg"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className='logo'>
          <img src={'https://www.qbrobotics.com/wp-content/uploads/2018/03/sample-logo-470x235.png'} alt="logo" />
        </div>
        <Menu>
          <Menu.Item key='1'>
            <Icon type='appstore' />
            <NavLink to='/admin'>Dashboard</NavLink>
          </Menu.Item>

          <Menu.Item key='2'>
            <Icon type='flag' />
            <NavLink to='/admin/countries'>Paises</NavLink>
          </Menu.Item>

          <Menu.Item key='3'>
            <Icon type='user' />
            <NavLink to='/admin/users'>Usuarios</NavLink>
          </Menu.Item>

          <Menu.Item key='4'>
            <Icon type='idcard' />
            <NavLink to='/admin/citizens'>Ciudadanos</NavLink>
          </Menu.Item>

          <Menu.Item key='5'>
            <Icon type='solution' />
            <NavLink to='/admin/type_candidates'>Tipos de Candidatos</NavLink>
          </Menu.Item>

        </Menu>
      </StyledSider>
    )
  }
};

export default AdminSider;
