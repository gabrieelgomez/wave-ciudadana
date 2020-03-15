import React from 'react';
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,.2);
  overflow: auto;
  position: fixed;
  left: 0;
`

const AdminSider = () => {
  return (
    <StyledSider>
      <div className='logo'>
        <h1>Bigwave Admin</h1>
      </div>
      <Menu>
        <Menu.Item key='1'>
          <NavLink to='/admin'>
            <Icon type='appstore' />Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key='2'>
          <NavLink to='/users'>
            <Icon type='user' />Usuarios
          </NavLink>
        </Menu.Item>
        <Menu.Item key='3'><Icon type='exclamation' />Opción 3</Menu.Item>
        <Menu.Item key='4'><Icon type='exclamation' />Opción 4</Menu.Item>
      </Menu>
    </StyledSider>
  )
};

export default AdminSider;