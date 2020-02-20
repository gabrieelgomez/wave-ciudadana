import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from "antd";
import CustomModal from '../Modal';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';


export default class Navbar extends React.Component {
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
      cb,
      userInfo
    } = this.props;
    let form

    let callback = (that, opt) => {
      cb(opt);
      that.handleCancel();
    }

    if (showLogin) {
      form = <LoginForm cb={(opt) => callback(this, opt)}/>
    } else if (showRegister) {
      form = <RegisterForm cb={(opt) => callback(this, opt)}/>
    }

    return (
      <div className="header">
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
          </ul>
          { userInfo.length > 0 ? (
              <p>{userInfo[0].email}</p>
            ) : (
              <ul>
                <li>
                  <span onClick={() => this.showForm('Login')}><Icon type="user"/>Login</span>
                </li>
                <li>
                  <span onClick={() => this.showForm('Register')}><Icon type="login"/>Sign up</span>
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
