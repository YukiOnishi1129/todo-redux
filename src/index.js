import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './containers/TodoApp';
import tasksReducer from './reducers/tasks';
import './index.css';
import * as serviceWorker from './serviceWorker';

// storeの生成
const store = createStore(tasksReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
