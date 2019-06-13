import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// ~~~~~~~~~~~~~~~~~~~~~ TESTING ONLY START

// import { fetchCompanyNews } from './actions/quotes_action';
import {
  fetchCompanyNews,
  fetchCompanyInformation,
  fetchCompanyEPS,
  fetchDividendYield
} from './api/iex_api_util';


// action tests
// window.fetchCompanyNews = fetchCompanyNews;

// API call(s) tests
window.fetchCompanyEPS = fetchCompanyEPS;
window.fetchCompanyNews = fetchCompanyNews;
window.fetchCompanyInformation = fetchCompanyInformation;
window.fetchDividendYield = fetchDividendYield;

// ~~~~~~~~~~~~~~~~~~~~~ TESTING ONLY END


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
