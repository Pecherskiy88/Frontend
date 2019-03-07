import React, { Component } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
    state = {
        text: '',
        arr: [],
        updateText: '',
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
        const updateItems = this.state.arr.map(el => (el.id === Number(id) ? {...el, edit: true} : el));
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

    render() {
        const {text, arr, updateText} = this.state;
        return (
            <div className='App'>
                <Header/>
                <Form formSubmit={this.formSubmit} inputChange={this.inputChange} text={text}/>
                <List note={arr} 
                deleteTask = {this.deleteTask} 
                editTask={this.editTask}
                updateText = {updateText}
                inputUpdate = {this.inputUpdate}
                saveTask = {this.saveTask}
                cancelTask = {this.cancelTask}
                doneTask = {this.doneTask}/>
            </div>
        );
    }
}

export default App;