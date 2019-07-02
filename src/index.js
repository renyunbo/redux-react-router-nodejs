import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';//applyMiddleware处理中间件  (处理异步)
import thunk from 'redux-thunk';
import App from './App';
import { counter, addNum, removeNum, addNumAsync } from './index.redux';

//redux和react相连接
// 1.新建store
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
));


// const store = createStore(counter, applyMiddleware(thunk));//createStore里面需要传递一个reducer

function render() {
    //2.store已组件属性的方式传递进去
    ReactDom.render(<App store={store} addNum={addNum} removeNum={removeNum} addNumAsync={addNumAsync} />, document.getElementById('root'))
}
render();
//3外界已subscribe的形式订阅render函数，这样状态有什么变化，render会重新执行
store.subscribe(render)
