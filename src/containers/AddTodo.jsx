import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state) => {
  return {
    // state.reducer名.プロパティ
    uniqueId: state.tasksReducer.uniqueId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterUpdateTodo: (id, title) => {
      dispatch(addTodo(id, title));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
