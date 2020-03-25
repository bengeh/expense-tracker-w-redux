import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import expenseRootReducer from './ExpenseDashboard/reducers/expenseRootReducer';
import {Provider} from 'react-redux';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
export const devtoolsExtension = 
(window && (window as any).__REDUX_DEVTOOLS_EXTENSION__)


const store = createStore(
    expenseRootReducer,
    composeEnhancers && devtoolsExtension
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
