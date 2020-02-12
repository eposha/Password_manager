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

  handleSubmit = () => {
    event.preventDefault();
    const { loginValue, passValue } = this.state;

    this.props.login(loginValue, passValue);
  };
  render() {
    const { loginValue, passValue } = this.state;
    return (
      <div className="login">
        <h1 className="title">Password manager</h1>
        <div className="subtitle">
          Hey, hero! Log in or begin!
          <span className="piece">It’s a piece of cake</span>
        </div>
        <form className="login__form" onSubmit={this.handleSubmit}>
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
        </form>
        <button className="btn-register btn" onClick={this.props.showRegister}>
          Create account
        </button>
      </div>
    );
  }
}

export default Login;
