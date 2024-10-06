import { useState } from "react";
import "./App.css";

function ToDoItem(props){
    
    let data = props.data;
    let onDelete = props.onDelete;
    let onEdit = props.onEdit;
    let editing = props.editing;
    let setEditing = props.setEditing;
    let index = props.index;
    let markTask = props.markTask;

    const [editedValue, setEditedValue] = useState(data.text);

    function handleEdit(){
        if(editing === index)
            onEdit(index, editedValue); 
        else 
            setEditing(index); 
    }

    return (
        <p style={{ textDecoration: data.completed ? 'line-through' : 'none' }} 
            className="taskItems"
        > 
        <span className="saveOutput">
            {editing === index ? (
                <>
                    <input
                        className="saveText"
                        type="text"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                    />
                    <button onClick={handleEdit} className="saveButton">🖐️ Save</button>
                </>
            ) : (
                <>
                    <span className="outputText">
                        {data.text} 
                    </span>

                    <button onClick={() => onDelete(data)} className="deleteButton">❌ Delete</button>
                    
                    <button onClick={handleEdit} className="editButton">✂️ Edit</button>
                    
                    <button onClick={() => markTask(index)} className="markTaskButton">{data.completed ? '🤞 Unmark' : '👍🏿Complete'}</button> 
                </>
            )}
        </span>
        </p>
    );
}

export default ToDoItem;
