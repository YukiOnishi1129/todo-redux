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
      // stateを変更する際は再描画させるため
      // stateの前後で変更があったことを通知する必要がある。
      // state = action.payload.dataなど、直接代入させると変更が通知されない
      // (参照渡しであるため)
      // よって、Object.assigまたはspread構文で更新する

      // Object.assignの記述方法
      // 現在のstateとactionの値をマージして新しいstateを返す
      return Object.assign({}, state, {
        todos: state.todos.concat({
          id: action.payload.id,
          title: action.payload.title,
          editFlg: false,
        }),
        uniqueId: action.payload.id,
      });
    //   spread operatorの記述方法
    // 現在のstateとactionの値をマージして新しいstateを返す
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos,
    //       {
    //         id: action.payload.id,
    //         title: action.payload.title,
    //         editFlg: false,
    //       },
    //     ],
    //     uniqueId: action.payload.id,
    //   };
    default:
      return state;
  }
}
