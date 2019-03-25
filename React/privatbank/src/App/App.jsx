import React, { Component } from 'react';
import {connect} from 'react-redux';
import {asyncData} from '../redux/actions/fetchAction';
import TableItems from '../TableItems/TableItems';
import Form from '../Form/Form';
import logo from './private.jpg';
import './App.css';


class App extends Component {

    componentDidMount() {
        this.props.fetch();
    }

    
    render() {
    const {fetchFromApi} = this.props;
    

        return (
            <div className='root'>
                 <img className='logo' src={logo} alt=""/>
                 <header className='header'>Обмен Валют</header>
                 <table className='table-title'>
                     <th>
                         <td>Валюта</td>
                         <td>Покупка</td>
                         <td>Продажа</td>
                     </th>
                 </table>
                 <table className = "table">
                    {fetchFromApi.map(el => <TableItems ccy = {el.ccy} buy = {el.buy} sale = {el.sale} key={el.ccy}/>)}
                 </table>
                 <Form/>
            </div>
        );
    }
}
const MSTP = store => ({
    fetchFromApi: store.fetchFromApi,

})

const MDTP = dispatch => ({
    fetch: () => dispatch(asyncData())
})


export default connect(MSTP, MDTP) (App);

// c фетча прилетают данные курса. Продолжить делать кнопки, инпут и результат.