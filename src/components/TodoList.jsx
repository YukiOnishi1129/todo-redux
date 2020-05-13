import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(targetId) {
    this.props.onClickDelete(targetId);
  }

  render() {
    // propsからstate, イベントを取得できる
    // const { todos } = this.props;

    const todoList = this.props.todos.map((todo) => {
      return <Todo key={todo.id} {...todo} onRemove={this.handleDelete} />;
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
  onClickDelete: PropTypes.func.isRequired,
};
