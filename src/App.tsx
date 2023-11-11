import React from 'react'
import './App.css'
import Todos from './components/Todos'

const MockTodos = [
  {
    id: 1,
    title: 'test',
    completed: false
  },
  {
    id: 2,
    title: 'test2',
    completed: false
  },
  {
    id: 3,
    title: 'test3',
    completed: false
  }
]

const App: React.FC = () => {
  return (
    <>
      <header>

      </header>
      <main>
        <Todos Todos={MockTodos}/>
      </main>
    </>
  )
}

export default App
