import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/store';
import HeaderContainer from './header/headerContainer';
import ChartNewsLayout from './chartNews/chartNewsLayout';
import CompanyStatsInfoLayout from './companyStatsInfo/companyStatsInfoLayout';
import '../css/App.css';
import { setSampleState } from '../sampleState';

const store = configureStore(setSampleState());
window.store = store;

function App() {
  return (
    <Provider store={store}>
        <HeaderContainer />
      <div className="section-data">
        <ChartNewsLayout />
        <CompanyStatsInfoLayout />
      </div>
    </Provider>
  );
}

export default App;
