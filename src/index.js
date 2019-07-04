import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';//applyMiddleware处理中间件  (处理异步)
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import { counter } from './index.redux';
import reducers from './reducer';
import Auth from './Auth';
import Dashboard from './Dashboard';

//redux和react相连接
// 1.新建store
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
console.log(store.getState());


// const store = createStore(counter, applyMiddleware(thunk));//createStore里面需要传递一个reducer
// 登录
//     没有登录信息 统一跳转到login
// 页面    导航+显示+注销
//     yiying
//     Erying
//     Qibinglian

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            {/* exact表示精确匹配 */}
            <Switch>
                {/* 只渲染命中的第一个Route */}
                <Route path='/login' component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                {/* 如果全部没有命中则跳转到面板页面 */}
                <Redirect to='/dashboard'></Redirect>
            </Switch>

          
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)