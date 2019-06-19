import React from 'react';

import { Provider } from 'react-redux';
import configureStore from '../store/store';
import HeaderContainer from './header/headerContainer';
import DisplayIndex from './display/displayIndex';
import TabIndex from './tab/tabIndex';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Adaptive</h1>
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
