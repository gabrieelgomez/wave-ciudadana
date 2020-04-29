import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from "antd";
import CustomModal from '../../common/ui/Modal';
import LoginForm from '../../common/Session/LoginForm';
import RegisterForm from '../../common/Register';
import LogOutButton from '../../common/Session/LogOutButton';
import { connect } from 'react-redux';
import { DROP_CURRENT_USER } from '../../../actions/session';

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
    } = this.props;
    let form;

    if (showLogin) {
      form = <LoginForm cb={this.handleCancel} history={this.props.history} />
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
            { currentUser &&
              <li>
                <Link to="/my-polls">Mis Encuestas</Link>
              </li>
            }
          </ul>
          { currentUser ? (
              <ul>
                <li className="currentUser">
                  <Link to={`/my-profile`}>{currentUser.email}</Link>
                </li>
                { currentUser.roles && currentUser.roles.length !== 0 && currentUser.roles[0].name === 'superadmin' &&
                  <li>
                    <Link to="/admin">
                      <Icon type="appstore"/>
                    </Link>
                  </li>
                }
                <li>
                  <LogOutButton removeUser={this.props.dropCurrentUser}/>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <span style={{cursor : 'pointer'}} onClick={() => this.showForm('Login')}><Icon type="user"/>Entrar</span>
                </li>
                <li>
                  <span style={{cursor : 'pointer'}} onClick={() => this.showForm('Register')}><Icon type="login"/>Regístrate</span>
                </li>
              </ul>
            )
          }
        </nav>
        <CustomModal
          visible={this.state.visible}
          handleClose={this.handleCancel}
          footer={false}
        >
          {form}
        </CustomModal>
      </div>
    );
  }
}

const mapDispatchToProps = { dropCurrentUser: DROP_CURRENT_USER }

export default connect(null, mapDispatchToProps)(Navbar);