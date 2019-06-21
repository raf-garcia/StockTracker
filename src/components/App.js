import React from 'react';

import { Provider } from 'react-redux';
import configureStore from '../store/store';
import HeaderContainer from './header/headerContainer';
import DisplayIndex from './display/graphStatsWrapper';
import TabIndex from './tab/tabIndex';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <HeaderContainer />
      </div>
      <div>
        <DisplayIndex />
        <TabIndex />
      </div>
    </Provider>
  );
}

export default App;
