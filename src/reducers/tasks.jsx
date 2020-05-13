// 初期状態の設定
const initialState = {
  todos: [
    {
      id: 1,
      title: 'Task1',
      editFlg: false,
    },
    {
      id: 2,
      title: 'Task2',
      editFlg: false,
    },
  ],
  uniqueId: 2, // todoが初期値で2つあるため、todo追加した際のidの採番を3から開始する
  searchKeyWord: '', //検索キーワード
};

// Reducerの定義
export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            editFlg: false,
          },
        ],
        uniqueId: action.payload.id,
      };
    default:
      return state;
  }
}
