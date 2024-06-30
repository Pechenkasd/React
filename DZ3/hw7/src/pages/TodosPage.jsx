import React, { useEffect, useState } from 'react'
import Todo from '../components/Todo'

const TodosPage = () => {
    const[value,setValue] = useState("")
    const[todos,setTodos] = useState([])

    const handleSubmit = async() =>{
        const data ={
                title: value,
                status: true
            }
        const responce = await fetch('http://localhost:8000/todos',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        getTodos()
        setValue('')
    }
    const getTodos = async()=>{
        const responce = await fetch('http://localhost:8000/todos')
        const data = await responce.json()
        setTodos(data)
    }
    const updateStatusTodo = async(id, status)=>{
        await fetch(`http://localhost:8000/todos/${id}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });
                getTodos();
        };
    const deleteTodo = async(id, status)=>{
        const responce = await fetch(`http://localhost:8000/todos/${id}`,{
            method: "DELETE",
            body: JSON.stringify({ status }),
        })
        getTodos()
    }

    useEffect(()=>{
        getTodos()
    },[])
    return (
    <>
            <h1>Список дел</h1>
            <input 
                type="text" 
                onInput={(e)=> setValue(e.target.value)} 
                value={value}
                />
            <button onClick={handleSubmit}>Добавить задачу</button>
            {
                todos.length > 0 ? 
                todos.map((todo,id) =><Todo todo={todo} key={id} deleteTodo={deleteTodo} updateStatusTodo={updateStatusTodo}/>) 
                : <li>Список пуст</li>
            }
    </>
)   
}

export default TodosPage
