import React from "react";
import { saveUser, editPass, deletePass } from "../utilities/utilities";
class Edit extends React.Component {
  state = {
    site: "",
    userName: "",
    password: "",
    isShowPass: false
  };

  componentDidMount() {
    const { id, site, userName, password, currentUser } = this.props;
    this.setState({
      currentUser,
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
    const { id, site, userName, password, currentUser } = this.state;
    const editPassword = { id, site, userName, password };
    const editedUserPass = editPass(currentUser, editPassword);

    saveUser(editedUserPass);
    this.props.updateUsersList();
  };

  deletePassword = passId => {
    const { currentUser } = this.state;
    const deletedUserPass = deletePass(currentUser, passId);

    saveUser(deletedUserPass);
    this.props.updateUsersList();
  };

  toggleShowPass = () => {
    const toogle = this.state.isShowPass;
    this.setState({
      isShowPass: !toogle
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
            onFocus={this.toggleShowPass}
            onBlur={this.toggleShowPass}
            name="password"
            type={isShowPass ? "text" : "password"}
            className="site__password"
          />
          <button
            className="delete-btn btn"
            type="button"
            onClick={() => this.deletePassword(id)}
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
