
//action Type
const Add_NUM = 'add_num';
const REMOVE_NUM = 'remove_num';

//reducer
export function counter(state = 0, action) {
    switch (action.type) {
        case Add_NUM:
            return state + 1;
        case REMOVE_NUM:
            return state - 1;
        default:
            return 10;
    }
}

//action creator
export function addNum(){
    return {type:Add_NUM};
}
export function removeNum(){
    return {type:REMOVE_NUM}
}
//模拟异步
export function addNumAsync(){
    //thunk插件的作用，这里可以返回函数
    return dispatch =>{
        setTimeout(() => {
            //异步结束后，手动执行dispatch
            dispatch(addNum());
        }, 2000);
    }
}