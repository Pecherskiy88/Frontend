import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import {Switch, Route} from 'react-router-dom'; // компоненты которые реагируют на изменнение в NavLink и перерисовывают страницу
import Roadster from '../Roadster/Roadster';
import Curiosity from '../Curiosity/Curiosity';
import Avengers from '../Avengers/Avengers';
import User from '../User/User';


class App extends Component {
    state = {
        user: {},
    }
    fetchData = () => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => this.setState({
            user: data.results[0],
        }))
        .catch(er => console.log(er))
    }
    componentDidMount() {
        this.fetchData();
    }
    render() {
        const {user} = this.state;
        return (
            <div>
                <Menu/>
                <Switch>
                    <Route exact path='/' component = {Roadster}/>
                    <Route path='/curiosity' component = {Curiosity}/>
                    <Route path='/avengers' component = {Avengers}/>
                    {/* <Route path='/user' component = {User}/> если нужно в компонент передать пропсы кастомные, то запись ниже */}
                    <Route path='/user' render = {props => <User userData = {user} {...props}/>}/>

                </Switch>
            </div>
        );
    }
}

export default App;