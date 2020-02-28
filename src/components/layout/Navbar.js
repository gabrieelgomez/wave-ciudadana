import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from "antd";
import CustomModal from '../ui/Modal';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import LogOutButton from '../LogOutButton';
import { connect } from 'react-redux';
import { REMOVE_CURRENT_USER } from '../../actions/session';

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

  render() {
    const {
      showLogin,
      showRegister
    } = this.state;

    const {
      currentUser
    } = this.props.session;
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
          { currentUser ? (
              <ul>
                <li>
                  <Link to={`/profile`}>{currentUser.email}</Link>
                </li>
                <li>
                  <LogOutButton removeUser={this.props.REMOVE_CURRENT_USER}/>
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

const mapDispatchToProps = { REMOVE_CURRENT_USER }

export default connect((state) => state, mapDispatchToProps)(Navbar);
