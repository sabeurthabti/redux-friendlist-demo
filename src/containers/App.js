import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore, renderDevTools } from '../store_enhancers/devTools';

import AppView from './AppView.js';
import reducer from '../reducers';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <AppView /> }
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}
