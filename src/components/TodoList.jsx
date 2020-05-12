import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;

    // map関数で実施した場合(こっちがシンプルに書ける)
    const todoList = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });
    return (
      <section className="common-area">
        <ul className="todolist">{todoList}</ul>
      </section>
    );
  }
}
