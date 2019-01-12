import React from 'react';

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  state = {
    isAuth: process.env.NODE_ENV === 'development' ? true : false,
    username: 'demo@example.com',
  };

  authenticate = (email, callback) => {
    this.setState({ isAuth: true });
    this.setState({ username: email });
    setTimeout(callback, 100); //fake async
  };

  signout = callback => {
    this.setState({ isAuth: false });
    this.setState({ username: '' });
    setTimeout(callback, 100); //fake async
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          authenticate: this.authenticate,
          signout: this.signout,
          username: this.state.username,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
