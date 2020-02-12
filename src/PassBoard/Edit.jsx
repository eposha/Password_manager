import React from "react";

class Edit extends React.Component {
  state = {
    site: "",
    userName: "",
    password: "",
    isShowPass: false
  };

  componentDidMount() {
    const { id, site, userName, password } = this.props;
    this.setState({
      id,
      site,
      userName,
      password
    });
  }

  handleChangeFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editPassword = () => {
    const { id, site, userName, password } = this.state;
    const editPass = { id, site, userName, password };
    this.props.editPassword(editPass);
  };

  showPass = () => {
    this.setState({
      isShowPass: true
    });
  };

  hiddenPass = () => {
    this.setState({
      isShowPass: false
    });
  };

  render() {
    const { id, site, userName, password, isShowPass } = this.state;
    return (
      <>
        <form className="pass-data">
          <input
            onChange={this.handleChangeFormData}
            value={site}
            name="site"
            type="text"
            className="site__name"
          />
          <input
            onChange={this.handleChangeFormData}
            value={userName}
            name="userName"
            type="text"
            className="username"
          />
          <input
            onChange={this.handleChangeFormData}
            value={password}
            onFocus={this.showPass}
            onBlur={this.hiddenPass}
            name="password"
            type={isShowPass ? "text" : "password"}
            className="site__password"
          />
          <button
            className="delete-btn btn"
            type="button"
            onClick={() => this.props.deletePassword(id)}
          >
            del
          </button>
        </form>
        <button className="save__change-btn btn" onClick={this.editPassword}>
          Edit
        </button>
      </>
    );
  }
}

export default Edit;
