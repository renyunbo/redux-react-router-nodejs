import React from 'react';
import logo from './logo.svg';
import './App.css';
import { spawn } from 'child_process';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const boss = '张三';
        return (
           <div>
               <h2>tuanzhang:{boss}</h2>
               <App1 name='li'></App1>
            </div>
        )
    }
}
export default App;

class App1 extends React.Component{
    render(){
        return <h2>xuesheng1:{this.props.name}</h2>
    }
}