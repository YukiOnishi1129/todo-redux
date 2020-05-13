import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.title, // todoの内容は親から渡ってきたtitleを表示
    };
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }
  handleClickDelete() {
    if (window.confirm('todoを削除してもいいですか？')) {
      this.props.onRemove(this.props.id);
    }
  }

  render() {
    return (
      <li className="todo">
        <span className="todo-task">{this.state.text}</span>
        <i
          className="far fa-trash-alt delete fa-lg"
          onClick={this.handleClickDelete}
        ></i>
      </li>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  editFlg: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
};
