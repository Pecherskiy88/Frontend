import React from 'react';
import './TableItems.css';

const Table = ({ccy, buy, sale}) => {
    return (
       
                    <tr>
                        <th>{ccy}</th>
                        <th>{buy}</th>
                        <th>{sale}</th>
                    </tr>
                    
    );
};

export default Table;