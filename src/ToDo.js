import { Component } from 'react';

export class ToDo extends Component{
    state = {
        userInput: '' ,
        toDoList : [] 
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }

    render(){
        return <div>
            <div>
            <input type='text'
            placeholder='Что нужно сделать сегодня?'            
            onChange = {(e)=> {this.onChangeEvent (e.target.value)}} />
            </div>
        </div>
    }
}