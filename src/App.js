import React, { useState, useEffect } from 'react'
import List from './components/List.jsx'
import Alert from './components/Alert.jsx'

function App() {
  // Setting App States
  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: 'Hello', type: '' })

  // Function to Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // Setting conditions to monitor the input-field
    if (!task) {
      // Show Alert
      showAlert(true, 'danger', 'You Need to Input A Task!')
    } else if (task && isEditing) {
      // Handle Edit
    } else {
      // Display Alert

      // Add new Task to the List Component
      const newTask = {
        id: new Date().getTime().toString(),
        title: task,
      }

      setList([...list, newTask])
      showAlert(true, 'success', 'Task Added!')
      setTask('')
    }
  }

  // Function to Show Alert
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  return (
    <>
      <main className="container">
        <form className="list-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}

          <h3>To-Do List</h3>

          <div className="form-control">
            <input
              type="text"
              className='task-input'
              placeholder='e.g task 1'
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <button className="submit-btn">
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>

        <div className="list-container">
          <List tasklist={list} />
          <button className="clear-btn">Delete Tasks</button>
        </div>
      </main>
    </>
  );
}

export default App;
