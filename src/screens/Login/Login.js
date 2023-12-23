import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Row, Col } from 'reactstrap';
// import Loginlogo from "../../assets/img/logo.png";
import { Redirect } from 'react-router-dom';

class Login extends Component {
  renderRedirect = () => {
    // const user = JSON.parse(window.localStorage.getItem('user'));
    // let role = user.roleId;
    return <Redirect to="/dashboard" />;
  };

  render() {
    const user = window.localStorage.getItem('user'); // JSON.parse(window.localStorage.getItem('user'));
    return (
      <div className="container">
        {user ? (
          this.renderRedirect()
        ) : (
          <Row className="full-height-vh">
            <Col
              xs="12"
              className="d-flex align-items-center justify-content-center"
            >
              <div className="text-center width-400 login_box">
                <div>
                  <div className="login_logo">
                    {/* <img src={Loginlogo} alt="logo" /> */}IOT App
                  </div>
                  {/* <p className="fs14">Please login to your account.</p> */}
                  <LoginForm />
                </div>
              </div>
            </Col>
          </Row>
        )}
        <div className="login_footer">
          <Row>
            <Col sm="6" className="text-left"></Col>
            <Col sm="6" className="text-right">
              Version 1.0
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;
