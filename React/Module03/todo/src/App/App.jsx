import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Form from '../Form/Form';
import List from '../List/List';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
    state = {
        text: '',
        arr: [],
        updateText: '',
        btn: 'all',
    }

    inputChange = (e) => {
        const value = e.target.value;
        this.setState({
            text: value,
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id: Date.now(),
            task: this.state.text,
            edit: false,
            done: false,
        }

        this.setState(prev=> ({
            text: '',
            arr: [...prev.arr, obj]

        }))       
    } 

    deleteTask = (e) => {
        const id = e.target.dataset.id;
        const delItem = this.state.arr.filter(el => el.id !== Number(id));
        this.setState({
            arr: delItem,
        })
    }
    editTask = (e) => {
        const id = e.target.dataset.id;
        const updateItems = this.state.arr.map(el => (el.id === Number(id) ? {...el, edit: true} : {...el, edit: false}));
        const editItem = updateItems.find(el => el.id === Number(id)).task;
     
        this.setState({
            arr: updateItems,
            updateText: editItem,
        })    
    }
    inputUpdate = (e) => {
        const updStr = e.target.value;
        this.setState({
            updateText: updStr,
        })
    }
    saveTask = (e) => {
       const id = e.target.dataset.id;
        const updateTask = this.state.arr.map(el => (el.id === Number(id) ? {...el, edit:!el.edit, task: this.state.updateText} : el));

        this.setState({
            arr: updateTask,
        })
    }
    cancelTask = (e) => {
        const id = e.target.dataset.id;
        const cancel = this.state.arr.map(el => (el.id === Number(id) ? {...el, edit: !el.edit} : el));

        this.setState({
            arr: cancel,
        })
    }
    doneTask = (e) => {
        const id = e.target.dataset.id;
        const clickTask = this.state.arr.map(el => (el.id === Number(id) ? {...el, done: !el.done} : el));

        this.setState({
            arr: clickTask,
        })
    }
    
    writeCrit = (e) => {
        console.log(e.target.dataset.name);
        const click = e.target.dataset.name;
        this.setState({
            btn: click,
        })
        
    }
    filterData = (arr, crit) => {
        if(crit === 'all'){
            return arr
        }else if(crit === 'complete'){
            return arr.filter(el => el.done)
        }else if(crit === 'incomplete') {
            return arr.filter(el => !el.done)
        }
        
        
    }


    render() {
        const {text, arr, updateText, btn} = this.state;
        return (
            <div className='App'>
                <Header/>
                <Form formSubmit={this.formSubmit} inputChange={this.inputChange} text={text} writeCrit = {this.writeCrit}/>
                <Switch>
                <Route path='/all' render = {props => 
                    <List note={arr} 
                    deleteTask = {this.deleteTask} 
                    editTask={this.editTask}
                    updateText = {updateText}
                    inputUpdate = {this.inputUpdate}
                    saveTask = {this.saveTask}
                    cancelTask = {this.cancelTask}
                    doneTask = {this.doneTask}
                    filterData = {this.filterData}
                    btn = {btn}/>}/>
                    <Route path='/complete' render = {props => 
                    <List note={arr} 
                    deleteTask = {this.deleteTask} 
                    editTask={this.editTask}
                    updateText = {updateText}
                    inputUpdate = {this.inputUpdate}
                    saveTask = {this.saveTask}
                    cancelTask = {this.cancelTask}
                    doneTask = {this.doneTask}
                    filterData = {this.filterData}
                    btn = {btn}/>}/>
                    <Route path='/incomplete' render = {props => 
                    <List note={arr} 
                    deleteTask = {this.deleteTask} 
                    editTask={this.editTask}
                    updateText = {updateText}
                    inputUpdate = {this.inputUpdate}
                    saveTask = {this.saveTask}
                    cancelTask = {this.cancelTask}
                    doneTask = {this.doneTask}
                    filterData = {this.filterData}
                    btn = {btn}/>}/>
                </Switch>
            </div>
        );
    }
}

export default App;