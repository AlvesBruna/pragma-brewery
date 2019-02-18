import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { TruckPage } from './TruckPage';
import './App.scss';

const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-wrap">
          <TruckPage />
        </div>
      </Provider>
    );
  }
}

export default App;
