import React, { Component } from 'react';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const {
      fetchCompanyInformation,
      fetchCompanyQuote,
      fetchCompanyEPS,
      fetchDividendYield,
      fetchCompanyNews,
      fetchTopPeers,
      fetchChartDataDay,
      fetchChartData
    } = this.props;
    const { body } = this.state;
    e.preventDefault();

    fetchCompanyInformation(body);
    fetchCompanyQuote(body);
    fetchCompanyEPS(body);
    fetchDividendYield(body);
    fetchCompanyNews(body);
    fetchTopPeers(body);
    fetchChartDataDay(body);
    fetchChartData(body, "5D");
    fetchChartData(body, "1M");
    fetchChartData(body, "1Y");
    fetchChartData(body, "5Y");
    fetchChartData(body, "MAX");
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