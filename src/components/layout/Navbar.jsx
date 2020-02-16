import React from 'react';
import { Link } from "react-router-dom";
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
      form = <RegisterForm cb={cb}/>
    }

    return (
      <div className="header">
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
          </ul>
          { !userInfo ? (
            <ul>
              <li>
                <Link onClick={() => this.showForm('Login')}><i className="fa fa-user"></i>Login</Link>
              </li>
              <li>
                <Link onClick={() => this.showForm('Register')}><i className="fa fa-user"></i>Sign up</Link>
              </li>
            </ul>
            ) : (
              <p>{userInfo.uid}</p>
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