import React, { Component } from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import Pages from '../Pages/Pages';
import './App.css';


class App extends Component {
    state = {
        news: [],
        text: '',
        total: 0,
        current: 1,
        value: 0,
    }
    refresh = () => (
        fetch('http://content.guardianapis.com/search?api-key=test')
        .then(res => res.json())
        .then(data => this.setState({
            news: [...data.response.results]
        }))
        .catch(error => console.log(error))
        );

    componentDidMount() {
       this.refresh();
       
    }
    
    accordion = (e) => {
      const ID = e.target.dataset.id;
      const click = this.state.news.map(el => (el.id === ID ? {...el, isHosted: !el.isHosted}: {...el, isHosted: false}))

        fetch(`http://content.guardianapis.com/${ID}?show-blocks=body&api-key=test`)
        .then(res => res.json())
        .then(data => 
            {const title = data.response.content.blocks.body[0].bodyTextSummary;
            this.setState({
                text: title,
                news: click,
            })})
        .catch(er => console.log(er))
    }

    findPage = (e) => {
        const value = e.target.value*1;

        fetch(`http://content.guardianapis.com/search?page=${value}&api-key=test`)
        .then(res => res.json())
        .then(data => this.setState({
            news: data.response.results,
            current: data.response.currentPage,
            total: data.response.total,
            value: value,
        }))

        .catch(er => console.log(er))
        
    }
    nextPage = (e) => {
       const nextValue = Number(this.state.value) + 1;

        fetch(`http://content.guardianapis.com/search?page=${nextValue}&api-key=test`)
        .then(res => res.json())
        .then(data => this.setState({
            news: data.response.results,
            current: data.response.currentPage,
            total: data.response.total,
            value: nextValue,
        }))

        .catch(er => console.log(er))
    }

    prevPage = (e) => {
        const prevValue = Number(this.state.value) - 1;
 
         fetch(`http://content.guardianapis.com/search?page=${prevValue}&api-key=test`)
         .then(res => res.json())
         .then(data => this.setState({
             news: data.response.results,
             current: data.response.currentPage,
             total: data.response.total,
             value: prevValue,
         }))
 
         .catch(er => console.log(er))
     }

    render() {
        const {news, text, current, total} = this.state;
        
        return (
            <div>
                <Header refresh = {this.refresh}/>
                <List news = {news} accordion = {this.accordion} text = {text}/>
                <Pages findPage = {this.findPage} current = {current} total = {total} nextPage = {this.nextPage} prevPage = {this.prevPage}/>
            </div>
        );
    } 
}


export default App;

//  (http://content.guardianapis.com/search? page=2&api-key=test).