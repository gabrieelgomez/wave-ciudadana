import React from 'react';
import { Icon } from 'antd';
import { withRouter } from "react-router-dom";

class LogOutButton extends React.Component {
  state = {
    redirect: null
  }

  handleLogOut = () => {
    this.props.removeUser();
    this.props.history.push("/");
  }

  render() {
    return (
      <span
        style={{cursor : 'pointer'}}
        onClick={this.handleLogOut}>

        <Icon type="login"/>Log out
      </span>
    )
  }
}

export default withRouter(LogOutButton);
