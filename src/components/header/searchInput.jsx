import React, { Component } from 'react';

import * as IexAPIUtil from '../../api/iex_api_util';
import {
  receiveCompanyNews,
  receiveCompanyInfo,
  receiveCompanyStats,
  receiveCompanyEPS,
  receiveTopPeers,
  receiveDividendYield
} from '../../actions/quotes_action';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    // news api call
    IexAPIUtil.fetchCompanyNews(this.state.body).then(companyNews => (
      dispatch(receiveCompanyNews(companyNews))
    ));

    // company information api call
    IexAPIUtil.fetchCompanyInformation(this.state.body).then(companyInfo => (
      dispatch(receiveCompanyInfo(companyInfo))
    ));

    // company stats api call(s)
    IexAPIUtil.fetchCompanyQuote(this.state.body).then(companyStats => (
      dispatch(receiveCompanyStats(companyStats))
    ));
    
    IexAPIUtil.fetchCompanyEPS(this.state.body).then(earningsPerShare => (
      dispatch(receiveCompanyEPS(earningsPerShare))
    ));
    
    IexAPIUtil.fetchDividendYield(this.state.body).then(dividendYield => (
      dispatch(receiveDividendYield(dividendYield))
    ));

    // top peers api call
    IexAPIUtil.fetchTopPeers(this.state.body).then(topPeers => (
      dispatch(receiveTopPeers(topPeers))
    ));

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" value={ this.state.body } onChange={ this.update('body') }/>
        <button onClick={ this.handleSubmit }>Search</button>
      </form>
    );
  }
}