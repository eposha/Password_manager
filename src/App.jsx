import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import PassBoard from "./PassBoard/PassBoard";
class App extends React.Component {
  state = {
    newUser: {},
    users: [{ userName: "Ivan", passValue: "qwerty", passwordsData: [] }],
    isShowLogin: true,
    isShowRegister: false,
    isShowPassBoard: false
  };

  login = (userName, password) => {
    const { users } = this.state;
    const user = users.find(user => {
      if (user.userName === userName && user.passValue === password) {
        return true;
      }
    });

    if (!user) {
      alert(
        "Hero, I can`t find you! Check login and password or quickly create a new account"
      );
      return;
    }

    this.setState({
      newUser: user,
      isShowLogin: false,
      isShowPassBoard: true
    });
  };

  createUser = user => {
    this.setState({
      newUser: user,
      users: [].concat(this.state.users, user),
      isShowPassBoard: true,
      isShowRegister: false
    });
  };

  showRegister = () => {
    this.setState({ isShowLogin: false, isShowRegister: true });
  };

  render() {
    const {
      newUser,
      isShowLogin,
      isShowRegister,
      isShowPassBoard
    } = this.state;
    return (
      <>
        {isShowLogin ? (
          <Login login={this.login} showRegister={this.showRegister} />
        ) : (
          undefined
        )}
        {isShowRegister ? <Register createUser={this.createUser} /> : undefined}
        {isShowPassBoard ? <PassBoard user={newUser} /> : undefined}
      </>
    );
  }
}

export default App;
