import ToDoItem from "./ToDoItem";
import { useState } from "react";
import "./App.css";

function ToDoList(){
    const [todo, setToDo] = useState('');
    const [todoList, setTodoList] = useState([]);

    function addToDo(){
        if(todo.trim() !== ''){
            setTodoList([...todoList, { text: todo, completed: false }]); 
            setToDo('');
        }
    }

    function deleteToDo(item){
        const index = todoList.findIndex(data => data.text === item.text); 
        if(index !== -1){
            const updatedList = [...todoList];
            updatedList.splice(index, 1);
            setTodoList(updatedList);
        }
    }

    const [editing, setEditing] = useState(null);

    function editToDo(index, newValue){
        const updatedList = [...todoList];
        updatedList[index].text = newValue; 
        setTodoList(updatedList);
        setEditing(null); 
    }

    function markTask(index){
        const updatedList = [...todoList];
        updatedList[index].completed = !updatedList[index].completed; 
        setTodoList(updatedList);
    }

    return (
        <>
            <div  className="InputField">
                <input type="text" value={todo} onChange={(e) => setToDo(e.target.value)} className="Input" />
                <button onClick={addToDo} className="addButton">👈 Add Task </button>
            </div>

            <ul>
                {todoList.map((data, index) => (
                    <ToDoItem 
                        key={index}
                        data={data}
                        onDelete={deleteToDo}
                        index={index}
                        onEdit={editToDo}
                        editing={editing}
                        setEditing={setEditing}
                        markTask={markTask}
                    />
                ))}
            </ul>
        </>
    );
}

export default ToDoList;
