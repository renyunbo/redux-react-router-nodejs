import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';//applyMiddleware处理中间件  (处理异步)
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import { counter} from './index.redux';

//redux和react相连接
// 1.新建store
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
));


// const store = createStore(counter, applyMiddleware(thunk));//createStore里面需要传递一个reducer
ReactDom.render(
    (<Provider store={store}>
        <App />,
    </Provider>),
    document.getElementById('root')
)