import { connect } from 'react-redux';
// import { addTodo } from '../actions';
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onEnterUpdateTodo: (id, title) => {
//       dispatch(addTodo(id, title));
//     },
//     onUpdateId: (id) => {
//       dispatch(updateUniqueId(id));
//     },
//   };
// };

// connect(state, action)(component)
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps)(TodoList);
