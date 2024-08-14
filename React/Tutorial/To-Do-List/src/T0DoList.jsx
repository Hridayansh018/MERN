import React, { useState } from "react";

function ToDoList(){

    const [task, setTask] = useState(["one","two","three"])
    const [newTask , setNewTask] = useState("")

    function handleChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !==""){
            setTask(task =>[...task, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){
        	const updatedTask = task.filter((_, i) => i !== index);
            setTask(updatedTask);
    }

    function moveTaskUp(index){
        if (index > 0) {
            const updatedTask = [...task];
            const [removed] = updatedTask.splice(index, 1);
            updatedTask.splice(index - 1, 0, removed);
            setTask(updatedTask);
        }
    }

    function moveTaskDown(index){
        if (index < task.length - 1) {
            const updatedTasks = [...task];
            const [removed] = updatedTasks.splice(index, 1);
            updatedTasks.splice(index + 1, 0, removed);
            setTask(updatedTasks);
          }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>

            <div>
            <input type="text" placeholder="Enter Task" value={newTask} onChange={handleChange}/>
                <button className="add-button" onClick={addTask}>
                Add
                </button>
            </div>
            <ol>
                {task.map((task, index) => (
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>
                    Delete
                    </button>
                    <button className="move-up-button" onClick={() => moveTaskUp(index)}>
                    👆
                    </button>
                    <button className="move-down-button" onClick={() => moveTaskDown(index)}>
                    👇
                    </button>
          </li>
        ))}
      </ol>

        </div>
    )
}

export default ToDoList