
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainApp from "../../components/Main/MainApp";
import ModalManager from "../../components/modal/ModalManager";
import TestComponent from "../../testcomponent/TestComponent";
import LoginForm from "../../components/Auth/Login/LoginForm";

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager />
        
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/test" exact component={TestComponent} />
          <MainApp />
        </Switch>
      </div>
    );
  }
}
export default App;
