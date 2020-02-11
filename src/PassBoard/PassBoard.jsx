import React from "react";
import "./PassBoard.scss";
import CreatePass from "./CreatePass";
import Edit from "./Edit";

class PassBoard extends React.Component {
  state = {
    user: {
      name: "Ivan",
      surname: "Hero",
      passwordsData: [
        {
          site: "GBSFO",
          userName: "Andrei",
          password: "93799928"
        },
        {
          site: "Gromcode",
          userName: "Andrei",
          password: "fich"
        }
      ]
    }
  };

  handleSubmitCreatePass = newPass => {
    const cloneUser = Object.assign({}, this.state.user);
    cloneUser.passwordsData = [].concat(this.state.user.passwordsData, newPass);
    this.setState({
      user: cloneUser
    });
  };

  editPassword = pass => {
    const newArrPasswords = this.state.user.passwordsData.filter(
      password => password.site !== pass.site
    );
    const cloneUser = Object.assign({}, this.state.user);
    cloneUser.passwordsData = newArrPasswords;

    this.setState({
      user: cloneUser
    });
  };

  deletePassword = site => {
    const newArrPasswords = this.state.user.passwordsData.filter(
      password => password.site !== site
    );
    const cloneUser = Object.assign({}, this.state.user);
    cloneUser.passwordsData = newArrPasswords;

    this.setState({
      user: cloneUser
    });
  };

  render() {
    const { user } = this.state;
    const userPasswords = user.passwordsData.map(pass => {
      const { site, userName, password } = pass;
      return (
        <Edit
          key={site}
          editValueSite={site}
          editValueName={userName}
          editValuePass={password}
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
