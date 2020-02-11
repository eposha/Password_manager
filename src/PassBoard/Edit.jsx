import React from "react";

class Edit extends React.Component {
  state = {
    editValueSite: "",
    editValueName: "",
    editValuePass: "",
    isShowPass: false
  };

  componentDidMount() {
    const { id, editValueSite, editValueName, editValuePass } = this.props;
    this.setState({
      id,
      editValueSite,
      editValueName,
      editValuePass
    });
  }

  handleChangeFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editPassword = () => {
    const { id, editValueSite, editValueName, editValuePass } = this.state;
    const editPass = [{ id, editValueSite, editValueName, editValuePass }];
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
    const {
      id,
      editValueSite,
      editValueName,
      editValuePass,
      isShowPass
    } = this.state;
    return (
      <>
        <form className="pass-data">
          <input
            onChange={this.handleChangeFormData}
            value={editValueSite}
            name="editValueSite"
            type="text"
            className="site__name"
          />
          <input
            onChange={this.handleChangeFormData}
            value={editValueName}
            name="editValueName"
            type="text"
            className="username"
          />
          <input
            onChange={this.handleChangeFormData}
            value={editValuePass}
            onFocus={this.showPass}
            onBlur={this.hiddenPass}
            name="editValuePass"
            type={isShowPass ? "text" : "password"}
            className="site__password"
          />
          <button
            className="delete-btn btn"
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
