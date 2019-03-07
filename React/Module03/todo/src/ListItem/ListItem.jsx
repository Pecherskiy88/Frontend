import React from 'react';
import './ListItem.css';

const ListItem = ({note, deleteTask, editTask, saveTask, updateText, inputUpdate, cancelTask, doneTask}) => {
    return (
        <li className='Items'>
            {note.edit ? <input type="text" value={updateText} onChange={inputUpdate}/> : 
            !note.done ? <p onClick={doneTask} data-id = {note.id} className="Text">{note.task}</p> : <p onClick={doneTask} data-id = {note.id} className="Text Complete">{note.task}</p> }
            {note.edit ? <button className="Save btns" onClick={saveTask} data-id={note.id}>SAVE</button> : <button className="Edit btns" data-id={note.id} onClick={editTask}>EDIT</button>}
            {note.edit ? <button className="Cancel btns" data-id={note.id} onClick={cancelTask}>CANCEL</button> : <button className="Delete btns" data-id={note.id} onClick={deleteTask}>DELETE</button>}
        </li>
    );
};

export default ListItem;