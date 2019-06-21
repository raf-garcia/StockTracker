import React, { Component } from 'react';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
  }

  handleSubmit = (e) => {
    const { searchAction } = this.props;
    const { searchText } = this.state;
    e.preventDefault();
    searchAction(searchText);
  }

  update = (e) => {
    this.setState({ searchText: e.target.value });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" value={ this.state.body } onChange={ this.update } placeholder="Search"/>
      </form>
    );
  }
}