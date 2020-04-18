import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;
const { SubMenu } = Menu;

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
    const currentPath = this.props.path.pathname;
    return (
      <StyledSider
        breakpoint="lg"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className='logo'>
          <Link to="/">
            <img src={'https://www.qbrobotics.com/wp-content/uploads/2018/03/sample-logo-470x235.png'} alt="logo" />
          </Link>
        </div>
        <Menu 
          mode="inline"
          activeKey={currentPath}
          selectedKeys={currentPath}
          defaultOpenKeys={currentPath === "/admin/proposal_categories" || currentPath === "/admin/poll_categories" ? ['sub1'] : ''}
        >
          <Menu.Item key='/admin/dashboard'>
            <Icon type='appstore' />
            <NavLink to='/admin'>Dashboard</NavLink>
          </Menu.Item>

          <Menu.Item key='/admin/countries'>
            <Icon type='flag' />
            <NavLink to='/admin/countries'>Paises</NavLink>
          </Menu.Item>

          <Menu.Item key='/admin/users'>
            <Icon type='user' />
            <NavLink to='/admin/users'>Usuarios</NavLink>
          </Menu.Item>

          <Menu.Item key='/admin/citizens'>
            <Icon type='idcard' />
            <NavLink to='/admin/citizens'>Ciudadanos</NavLink>
          </Menu.Item>

          <Menu.Item key='/admin/type_candidates'>
            <Icon type='solution' />
            <NavLink to='/admin/type_candidates'>Tipos de Candidatos</NavLink>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type='user' />
                <span>Categorías</span>
              </span>
            }
          >
            <Menu.Item key='/admin/proposal_categories'>
              <NavLink to='/admin/proposal_categories'>Propuestas</NavLink>
            </Menu.Item>
            <Menu.Item key='/admin/poll_categories'>
              <NavLink to='/admin/poll_categories'>Encuestas</NavLink>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key='/admin/proposals'>
            <Icon type='check' />
            <NavLink to='/admin/proposals'>Propuestas</NavLink>
          </Menu.Item>

          <Menu.Item key='/admin/polls'>
            <Icon type='check' />
            <NavLink to='/admin/polls'>Encuestas</NavLink>
          </Menu.Item>

        </Menu>
      </StyledSider>
    )
  }
};

export default AdminSider;
