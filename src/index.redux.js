import { expression } from "@babel/template";

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