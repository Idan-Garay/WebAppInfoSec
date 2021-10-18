import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

const Login = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <button>Login</button>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button>logout</button>
    </div>
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

const ProtectedRoute = ({ Componenent, ...rest }) => {
  return <Route {...rest} render={() => <Componenent />} />;
};

export default App;
