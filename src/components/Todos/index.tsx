import React from 'react'
import { type ListOfTodo } from '../../types'

interface Props {
  Todos: ListOfTodo
}
const Todos: React.FC <Props> = ({ Todos }) => {
  return (
    <ul>
      {
        Todos.map(el =>
          <li key={el.id} className={`${el.completed ? 'completed' : ''}`}>{ el.title }</li>
        )
      }
    </ul>
  )
}

export default Todos
