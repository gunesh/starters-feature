import React, { Component, createContext } from 'react';
const AppContext = createContext();
class AppProvider extends Component {
  state = {
    auth: false,
    info: {},
    login: () => {
      this.setState(
        (prevState) => ({
          auth: !this.state.auth,
        }),
        () => {
          console.log(this.state);
        }
      );
    },
    logout: () => {
      this.setState((prevState) => ({
        auth: false,
      }));
    },
    updateInfo: (label, value) => {
      this.setState((prevState) => ({
        info: {
          ...info,
          [label]: value,
        },
      }));
    },
  };
  render() {
    return (
      <AppContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
const AppConsumer = AppContext.Consumer;
export { AppConsumer, AppProvider };
