import React, { Component } from 'react';
import './App.css';
import  {BrowserRouter, Route} from 'react-router-dom'

import ViewCategory from './views/ViewCategory'
import ViewList from './views/ViewList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={ViewCategory}/>
          <Route path="/list/:category" component={ViewList}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
