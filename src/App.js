import React, { useState, useEffect } from 'react'
import List from './components/List.jsx'
import Alert from './components/Alert.jsx'

function App() {
  // Setting App States
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  // Function to Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <main className="container">
        <form className="list-form" onSubmit={handleSubmit}>
          {alert.show && <Alert />}
          <h3>To-Do List</h3>
          <div className="form-control">
            <input
              type="text"
              className='task-input'
              placeholder='e.g task 1'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button className="submit-btn">
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>

        <div className="list-container">
          <List />
          <button className="clear-btn">Delete Tasks</button>
        </div>
      </main>
    </>
  );
}

export default App;
