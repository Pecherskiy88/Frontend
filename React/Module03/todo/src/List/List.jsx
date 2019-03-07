import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css'

const List = ({note, deleteTask, editTask, saveTask, updateText, inputUpdate, cancelTask, doneTask}) => {
    return (
       <ol className='List'>
           {note.map(el => <ListItem note={el}
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