import React from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

function App() {
  return (
    <div className="center">
      <div className="container">
        <h2 className="header">React-Redux Notes app</h2>
        <NoteForm />        
        <NoteList />
      </div>
    </div>
    
  )
}

export default App
