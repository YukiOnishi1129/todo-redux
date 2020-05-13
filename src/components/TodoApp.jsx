import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo';
import SearchTodo from '../components/SearchTodo';
import TodoList from '../containers/TodoList';

export default class TodoApp extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Todo List</h1>
        <AddTodo />
        <SearchTodo />
        <TodoList />
      </div>
    );
  }
}
