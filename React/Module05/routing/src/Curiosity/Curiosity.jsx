import React from 'react';
import {NavLink} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Description from '../Subrout/Description';
import History from '../Subrout/History';
import Image from '../Subrout/Image';

const Curiosity = (props) => {
    
    return (
        <div>
            <h2>Curiosity</h2>
            <p>«Марсианская научная лаборатория» (МНЛ) (англ. Mars Science Laboratory, сокр. MSL), «Марс сайенс лэборатори» — миссия НАСА, в ходе выполнения которой на Марс успешно доставлен и эксплуатируется марсоход третьего поколения «Кьюрио́сити» (англ. Curiosity, МФА: [ˌkjʊərɪˈɒsɪti] — любопытство, любознательность[12]). Марсоход представляет собой автономную химическую лабораторию в несколько раз больше и тяжелее предыдущих марсоходов «Спирит» и «Оппортьюнити»[2][4]. Аппарат должен будет за несколько месяцев пройти от 5 до 20 километров и провести полноценный анализ марсианских почв и компонентов атмосферы. Для выполнения контролируемой и более точной посадки использовались вспомогательные ракетные двигатели[13].</p>

            <ul>
                <li>
                <NavLink to={`${props.match.path}/`}>Description</NavLink>
                </li>
                <li>
                <NavLink to={`${props.match.path}/history`}>History</NavLink>
                </li>
                <li>
                <NavLink to={`${props.match.path}/image`}>Image</NavLink>
                </li>
            </ul>

            <Switch>
                <Route exact path={`${props.match.path}/`} component = {Description}/>
                <Route path={`${props.match.path}/history`} component = {History}/>
                <Route path={`${props.match.path}/image`} component = {Image}/>
            </Switch>
        </div>
    );
};

export default Curiosity;