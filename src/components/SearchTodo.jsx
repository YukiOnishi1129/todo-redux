import React, { Component } from 'react';

export default class SearchTodo extends Component {
  render() {
    return (
      <section className="common-area">
        <input
          type="text"
          placeholder="Search Keyword"
          //   onKeyUp={this.props.handleSearch}
        />
      </section>
    );
  }
}
