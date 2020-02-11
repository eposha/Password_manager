import React from "react";
import "./Login.scss";

class Login extends React.Component {
  state = {
    loginValue: "",
    passValue: ""
  };

  handleChangeFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { loginValue, passValue } = this.state;
    return (
      <div className="login">
        <h1 className="title">Password manager</h1>
        <div className="subtitle">Hey, hero! Log in or sign in.</div>
        <form className="login__form">
          <input
            value={loginValue}
            onChange={this.handleChangeFormData}
            name="loginValue"
            type="text"
            className="login__name"
            placeholder="Login"
          />
          <input
            value={passValue}
            onChange={this.handleChangeFormData}
            name="passValue"
            type="password"
            className="login__password"
            placeholder="Password"
          />
          <button className="btn-login btn">Login</button>
          <button className="btn-register btn">Create account</button>
        </form>
      </div>
    );
  }
}

export default Login;
