import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import PassBoard from "./PassBoard/PassBoard";
import { setItem, getItem } from "./localStorage/localStorage";
class App extends React.Component {
  state = {
    newUser: {},
    users: [],
    isShowLogin: true,
    isShowRegister: false,
    isShowPassBoard: false
  };

  componentDidMount() {
    this.setState({
      users: getItem("users")
    });
  }

  login = (userName, password) => {
    const { users } = this.state;
    const user = users.find(user => {
      if (user.usernameValue === userName && user.passValue === password) {
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
    const users = [].concat(getItem("users"), user);
    setItem("users", users);

    this.setState({
      newUser: user,
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
