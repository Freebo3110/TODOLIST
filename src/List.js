import { Component } from 'react';
import checkbox from './checkbox.png';

export class List extends Component{
    state = {
        userInput: "",
        toDoList : [] 
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === ''){
            alert("Пожалуйста, внесите пункт.")
        }else{
        let listArray = this.state.toDoList;
        listArray.push(input)
        this.setState({toDoList : listArray,usepInput:''})
    }
}

deleteItem(){
    let listArray =this.state.toDoList;
    listArray =[];
    this.setState({toDoList:listArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed')
}

onFormSubmit(e){
    e.preventDefault();
}

    render(){
        return <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
            <input type='text'
            placeholder='Что нужно сделать?'            
            onChange = {(e)=> {this.onChangeEvent (e.target.value)}} 
            value={this.state.userInput} />
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="add">Добавить</button>
            </div>
                <ul>
                    {this.state.toDoList.map((item,index) => 
                    (<li onClick ={ this.crossedWord } key={ index }>
                    <img src={ checkbox } width="30px" alt='img'/>
                    {item}
                </li>))}
                </ul>
            <div className="container">   
                <button onClick= {() => this.deleteItem()} className="delete">Удалить</button>
        </div> 
        </form> 
        </div>
    }
}