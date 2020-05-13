import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '', // todo追加フォームの入力値(初期値は空文字)
    };
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  onInputValueChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleAdd(e) {
    // エンターキーが押された際にtodoを追加
    if (e.keyCode === 13 && e.target.value !== '') {
      // Todo追加処理
      this.props.onEnterUpdateTodo(this.props.uniqueId + 1, e.target.value);
      // todo追加後、フォームの値をリセットする
      this.setState({ inputValue: '' });
    }
  }

  render() {
    return (
      <section className="common-area">
        <h2 className="add-title">ADD TASK</h2>
        <input
          type="text"
          placeholder="New Task"
          value={this.state.inputValue}
          onChange={this.onInputValueChange}
          onKeyDown={this.handleAdd}
        />
      </section>
    );
  }
}

// Propsの型チェック
AddTodo.propTypes = {
  uniqueId: PropTypes.number.isRequired,
  onEnterUpdateTodo: PropTypes.func.isRequired,
};
