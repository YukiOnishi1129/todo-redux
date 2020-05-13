import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
  render() {
    // propsからstate, イベントを取得できる
    // const { todos } = this.props;

    // map関数で実施した場合(こっちがシンプルに書ける)
    const todoList = this.props.todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });
    return (
      <section className="common-area">
        <ul className="todolist">{todoList}</ul>
      </section>
    );
  }
}

// Propsの型チェック
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      editFlg: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
