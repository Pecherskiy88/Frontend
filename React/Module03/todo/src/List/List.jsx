import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css'

const List = ({note, deleteTask, editTask, saveTask, updateText, inputUpdate, cancelTask, doneTask, filterData, btn}) => {
    return (
       <ol className='List'>
           {filterData(note, btn).map(el => <ListItem note={el}
            deleteTask={deleteTask}
             editTask={editTask}
             updateText = {updateText}
             inputUpdate = {inputUpdate}
              saveTask = {saveTask}
              cancelTask = {cancelTask}
               id={el.id}
               doneTask = {doneTask}
                key={el.id}/>)}
       </ol>
    );
};

export default List;