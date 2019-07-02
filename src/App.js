import React from 'react';
import { directive } from '@babel/types';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { store, addNum, removeNum, addNumAsync } = this.props;
        const num = store.getState();
        return (
            <div>
                <h1>现在共有{num}</h1>
                <button onClick={() => store.dispatch(addNum())}>add</button>
                <button onClick={() => store.dispatch(removeNum())}>remove</button>
                <button onClick={() => store.dispatch(addNumAsync())}>addAsync</button>
            </div>

        )
    }
}
export default App;