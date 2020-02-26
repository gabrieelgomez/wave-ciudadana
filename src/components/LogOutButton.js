import React from 'react';
import {Icon} from 'antd';

class LogOutButton extends React.Component {
  handleLogOut = () => {
    this.props.removeUser();
  }

  render() {
    return <span style={{cursor : 'pointer'}} onClick={this.handleLogOut}><Icon type="login"/>Log out</span>
  }
}

export default LogOutButton;