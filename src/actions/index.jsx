// ActionCreatorの定義
export const addTodo = (todo) => ({
  type: 'ADD',
  payload: {
    todo,
  },
});
