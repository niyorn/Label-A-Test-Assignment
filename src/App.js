import React, { Component } from 'react';
import './App.css';
import  {BrowserRouter, Route, Switch} from 'react-router-dom'

import ViewCategory from './views/ViewCategory'
import ViewList from './views/ViewList'
import ViewError from './views/ViewError'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={ViewCategory}/>
            <Route path="/list/:category" component={ViewList}/>
            <Route component={ViewError}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
