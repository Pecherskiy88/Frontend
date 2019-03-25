import React from 'react';
import './TableItems.css';

const Table = ({ccy, buy, sale}) => {
    return (
                    
                    <tr className='rows'>
                        
                        <td>{ccy}</td>
                        <td>{buy}</td>
                        <td>{sale}</td>
                    </tr>
                    
    );
};

export default Table;