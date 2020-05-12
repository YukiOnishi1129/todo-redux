import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import rootReducer from './reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';

// storeの生成
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
