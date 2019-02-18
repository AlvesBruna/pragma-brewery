import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import './App.scss';

const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      </Provider>
    );
  }
}

export default App;
