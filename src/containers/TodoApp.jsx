import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoApp from '../components/TodoApp';

// mapStateToProps
const mapStateToProps = (todos) => {
  return {
    todos,
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
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
