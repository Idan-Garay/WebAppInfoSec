import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AuthApi from "./AuthApi";
import Cookie from "js-cookie";

function App() {
  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookie.get("user");
    if (user) {
      setAuth(true);
    }
  };
  useEffect(() => {
    readCookie();
  }, []);

  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

const Login = () => {
  const Auth = useContext(AuthApi);

  const handleOnClick = () => {
    Auth.setAuth(true);
    Cookie.set("user", "loginTrue");
  };
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleOnClick}>Login</button>
    </div>
  );
};

const Dashboard = () => {
  const Auth = useContext(AuthApi);

  const handleOnClick = () => {
    Auth.setAuth(false);
    Cookie.remove("user");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleOnClick}>logout</button>
    </div>
  );
};

const Routes = () => {
  const Auth = useContext(AuthApi);

  return (
    <Switch>
      <ProtectedLogin path="/login" auth={Auth.auth} Component={Login} />
      <ProtectedRoute
        path="/dashboard"
        auth={Auth.auth}
        Component={Dashboard}
      />
    </Switch>
  );
};

const ProtectedRoute = ({ auth, Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

const ProtectedLogin = ({ auth, Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/dashboard" />)}
    />
  );
};

export default App;
