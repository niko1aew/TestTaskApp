import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Index from './components/Index/Index';

function App(props) {
  let serverUrl = props.serverUrl;
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">
            Test Task
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">
                  Новая заявка
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route
            exact
            path="/create"
            render={props => <Create serverUrl={serverUrl} {...props} />}
          />
          <Route
            path="/edit/:id"
            render={props => <Edit serverUrl={serverUrl} {...props} />}
          />
          <Route
            path="/index"
            render={props => <Index serverUrl={serverUrl} {...props} />}
          />
          <Route
            path="/"
            render={props => <Index serverUrl={serverUrl} {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
