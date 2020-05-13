import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li className="todo">
        <span className="todo-task">{this.props.title}</span>
        <i className="far fa-trash-alt delete fa-lg"></i>
      </li>
    );
  }
}
