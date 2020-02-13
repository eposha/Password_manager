import React from "react";
import "./PassBoard.scss";
import CreatePass from "./CreatePass";
import Edit from "./Edit";

class PassBoard extends React.Component {
  state = {
    user: null
  };

  render() {
    const { users, match, updateUsersList } = this.props;
    const currentUser = users.find(user => user.id === +match.params.userId);

    const userPasswords = currentUser.passwordsData.map(pass => {
      const { id, site, userName, password } = pass;
      return (
        <Edit
          key={id}
          id={id}
          site={site}
          userName={userName}
          password={password}
          currentUser={currentUser}
          updateUsersList={updateUsersList}
        />
      );
    });
    return (
      <div className="pass-board">
        <h2 className="pass-title">Data passwords</h2>
        <CreatePass
          currentUser={currentUser}
          updateUsersList={updateUsersList}
        />
        {userPasswords}
      </div>
    );
  }
}

export default PassBoard;
