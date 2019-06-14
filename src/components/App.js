import React from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import { Provider } from 'react-redux';
import configureStore from '../store/store';

import SearchInputContainer from './header/searchInputContainer';
import TabIndex from './tab/tabIndex';

// All endpoints are prefixed with: https://api.iextrading.com/1.0 /stock/aapl/price

const store = configureStore();

window.store = store;

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Adaptive</h1>
        <SearchInputContainer />
        <TabIndex />
      </div>
    </Provider>
  );
}

export default App;
