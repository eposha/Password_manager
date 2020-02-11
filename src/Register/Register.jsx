import React from "react";
import "./Register.scss";

class Register extends React.Component {
  state = {
    name: "",
    surname: "",
    usernameValue: "",
    passValue: "",
    repeatPassValue: ""
  };

  handleChangeFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    event.preventDefault();
    const { name, surname, usernameValue, passValue } = this.state;
    const user = {
      id: Math.random(),
      name,
      surname,
      usernameValue,
      passValue,
      passwordsData: []
    };
    this.props.createUser(user);
  };

  render() {
    const {
      name,
      surname,
      usernameValue,
      passValue,
      repeatPassValue
    } = this.state;

    return (
      <div className="register">
        <h1 className="register__title">Create account</h1>
        <form className="register__account" onSubmit={this.handleSubmit}>
          <input
            value={name}
            onChange={this.handleChangeFormData}
            name="name"
            type="text"
            className="first-name"
            placeholder="Name"
          />
          <input
            value={surname}
            onChange={this.handleChangeFormData}
            name="surname"
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
              type="password"
              className="account__password"
              placeholder="Password"
            />
            <input
              value={repeatPassValue}
              onChange={this.handleChangeFormData}
              name="repeatPassValue"
              type="password"
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
