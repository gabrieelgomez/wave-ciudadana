import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from "antd";
import CustomModal from '../Modal';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  state = {
    visible: false,
    showLogin: true,
    showRegister: false
  };

  showForm = (formType) => {
    let config = {
      showLogin: false,
      showRegister: false,
      visible: true
    }

    let str = `show${formType}`;

    config[str] = true;

    this.setState(config);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleLogOut = () => {
    this.props.removeCurrentUser();
  }

  render() {
    const {
      showLogin,
      showRegister
    } = this.state;

    const {
      userInfo
    } = this.props;
    let form;

    if (showLogin) {
      form = <LoginForm cb={this.handleCancel}/>
    } else if (showRegister) {
      form = <RegisterForm cb={this.handleCancel}/>
    }
    return (
      <div className="header">
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
          </ul>
          { userInfo.currentUser ? (
              <ul>
                <li>
                  <p>{userInfo.currentUser.email}</p>
                </li>
                <li>
                  <span style={{cursor : 'pointer'}} onClick={this.handleLogOut}><Icon type="login"/>Log out</span>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <span style={{cursor : 'pointer'}} onClick={() => this.showForm('Login')}><Icon type="user"/>Login</span>
                </li>
                <li>
                  <span style={{cursor : 'pointer'}} onClick={() => this.showForm('Register')}><Icon type="login"/>Sign up</span>
                </li>
              </ul>
            )
          }
        </nav>
        <CustomModal
          visible={this.state.visible}
          handleCancel={this.handleCancel}
        >
          {form}
        </CustomModal>
      </div>
    );
  }
}

const removeCurrentUser = () => {
  return {
    type: 'REMOVE_CURRENT_USER',
    payload: {}
  }
}

const mapDispatchToProps = { removeCurrentUser }

export default connect((state) => state, mapDispatchToProps)(Navbar);
