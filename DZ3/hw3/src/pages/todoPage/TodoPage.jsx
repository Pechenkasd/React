import React from 'react'
import Todo from '../../components/Todo/Todo'
import styles from './todoPage.module.css'

const TodoPage = () => {
   const todos = ["todo 1", "todo 2", "todo 3"]
  return (
    <div className={styles.todosPage}>
      <h1>Todos Page</h1>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  )
}

export default TodoPage
