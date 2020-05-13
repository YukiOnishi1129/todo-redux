// ActionCreatorの定義
export const addTodo = (id, title) => ({
  type: 'ADD',
  payload: {
    id,
    title,
  },
});

export const deleteTodo = (id) => ({
  type: 'DELETE',
  payload: {
    id,
  },
});
