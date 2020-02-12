import React from "react";
import "./PassBoard.scss";
import CreatePass from "./CreatePass";
import Edit from "./Edit";
import {
  setNewPassToLocalStorage,
  createNewPass,
  editPass,
  deletePass
} from "./utilities";

class PassBoard extends React.Component {
  state = {
    user: {
      name: "",
      surname: "",
      passwordsData: []
    }
  };
  componentDidMount() {
    this.setState({
      user: this.props.user
    });
  }

  handleSubmitCreatePass = newPass => {
    const cloneUser = createNewPass(this.state.user, newPass);

    this.setState({
      user: cloneUser
    });

    setNewPassToLocalStorage(this.state.user, cloneUser);
  };

  editPassword = pass => {
    const cloneUser = editPass(this.state.user, pass);

    this.setState({
      user: cloneUser
    });

    setNewPassToLocalStorage(this.state.user, cloneUser);
  };

  deletePassword = identifier => {
    const cloneUser = deletePass(this.state.user, identifier);

    this.setState({
      user: cloneUser
    });

    setNewPassToLocalStorage(this.state.user, cloneUser);
  };

  render() {
    const { user } = this.state;
    const userPasswords = user.passwordsData.map(pass => {
      const { id, site, userName, password } = pass;
      return (
        <Edit
          key={id}
          id={id}
          site={site}
          userName={userName}
          password={password}
          editPassword={this.editPassword}
          deletePassword={this.deletePassword}
        />
      );
    });
    return (
      <div className="pass-board">
        <h2 className="pass-title">Data passwords</h2>
        <CreatePass submit={this.handleSubmitCreatePass} />
        {userPasswords}
      </div>
    );
  }
}

export default PassBoard;
