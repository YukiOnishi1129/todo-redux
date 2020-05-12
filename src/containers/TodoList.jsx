import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoList from '../components/TodoList';

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    // state.reducer名.プロパティ
    todos: state.tasksReducer.todos,
  };
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    onEnterUpdateTodo: (todo) => {
      dispatch(addTodo(todo));
    },
  };
};

// connect(state, action)(component)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
