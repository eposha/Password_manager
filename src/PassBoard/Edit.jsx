import React from "react";

class Edit extends React.Component {
  state = {
    editValueSite: "",
    editValueName: "",
    editValuePass: ""
  };
  componentDidMount() {
    const { id, editValueSite, editValueName, editValuePass } = this.props;
    this.setState({
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
    const { editValueSite, editValueName, editValuePass } = this.state;
    const editPass = [{ editValueSite, editValueName, editValuePass }];
    this.props.editPassword(editPass);
  };

  render() {
    const { editValueSite, editValueName, editValuePass } = this.state;
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
            name="editValuePass"
            type="password"
            className="site__password"
          />
          <button
            className="delete-btn btn"
            onClick={() => this.props.deletePassword(editValueSite)}
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
