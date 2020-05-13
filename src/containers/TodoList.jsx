import { connect } from 'react-redux';
import { deleteTodo } from '../actions';
import TodoList from '../components/TodoList';

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    // state.reducer名.プロパティ
    todos: state.tasksReducer.todos,
    uniqueId: state.tasksReducer.uniqueId,
  };
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    onClickDelete: (id) => {
      dispatch(deleteTodo(id));
    },
  };
};

// connect(state, action)(component)
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
