import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/store';
import HeaderContainer from './header/headerContainer';
import GraphStatsWrapper from './display/graphStatsWrapper';
import TabIndex from './tab/tabIndex';
import '../css/App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <HeaderContainer />
      </div>
      <div>
        <GraphStatsWrapper />
        <TabIndex />
      </div>
    </Provider>
  );
}

export default App;
