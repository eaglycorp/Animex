import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store/index.store';
import Router from './redux/routers/route';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>  
    );
  }
}

export default App;
