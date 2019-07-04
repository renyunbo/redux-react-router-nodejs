import React from 'react';
import { connect } from 'react-redux';
import { addNum, removeNum, addNumAsync } from './index.redux';

@connect(
    //你要state什么属性放到props里
    state=>({num:state.counter}),
    //你要什么方法，放到props里，自动dispatch
    {addNum, removeNum, addNumAsync}
)
class App extends React.Component {
    render() {
        const {num, addNum, removeNum, addNumAsync } = this.props;

        return (
            <div>
                <h1>现在共有{num}</h1>
                <button onClick={addNum}>add</button>
                <button onClick={removeNum}>remove</button>
                <button onClick={addNumAsync}>addAsync</button>
            </div>
        )
    }
}
// const mapState = (state) => {
//     return { num: state }
// }
// const actionCreators = { addNum, removeNum, addNumAsync }
// App = connect(mapState, actionCreators)(App);
export default App;

// https://blog.csdn.net/dengdongxia/article/details/86819496