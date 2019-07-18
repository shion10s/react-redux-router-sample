import React from 'react';
import { Provider } from 'react-redux'
import createStore from './store'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavMenu from './container/navMenu';
import Sample from './container/sample';
import Sample2 from './container/sample2';


const App = () => {
  return (
    <Provider store={createStore}>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/page1" component={Sample} />
          <Route path="/page2" component={Sample2} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
