import React from "react";
import "./Register.scss";

class Register extends React.Component {
  state = {
    firstNameValue: "",
    lastNameValue: "",
    usernameValue: "",
    passValue: "",
    repeatPassValue: ""
  };

  handleChangeFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const {
      firstNameValue,
      lastNameValue,
      usernameValue,
      passValue,
      repeatPassValue
    } = this.state;
    return (
      <div className="register">
        <h1 className="register__title">Create account</h1>
        <form className="register__account">
          <input
            value={firstNameValue}
            onChange={this.handleChangeFormData}
            name="firstNameValue"
            type="text"
            className="first-name"
            placeholder="Name"
          />
          <input
            value={lastNameValue}
            onChange={this.handleChangeFormData}
            name="lastNameValue"
            type="text"
            className="last-name"
            placeholder="Surname"
          />

          <input
            value={usernameValue}
            onChange={this.handleChangeFormData}
            name="usernameValue"
            type="text"
            className="account__name"
            placeholder="Username"
          />

          <div className="register__data">
            <input
              value={passValue}
              onChange={this.handleChangeFormData}
              name="passValue"
              type="text"
              className="account__password"
              placeholder="Password"
            />
            <input
              value={repeatPassValue}
              onChange={this.handleChangeFormData}
              name="repeatPassValue"
              type="text"
              className="account__password repeat"
              placeholder="Repeat password"
            />
          </div>

          <button className="create__account btn">Create account</button>
        </form>
      </div>
    );
  }
}

export default Register;
