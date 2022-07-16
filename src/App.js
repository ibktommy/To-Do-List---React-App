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
      setList(
        list.map((tasklist) => {
          if (tasklist.id === editID) {
            return { ...tasklist, title: task }
          }

          return tasklist
        })
      )

      setTask('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', "Task Edited and Added!")

    } else {
      // Display Alert
      showAlert(true, 'success', 'Task Added!')

      // Add new Task to the List Component
      const newTask = {
        id: new Date().getTime().toString(),
        title: task,
      }

      setList([...list, newTask])
      setTask('')
    }
  }

  // Function to Show Alert
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  // Function to Delete All Tasks
  const deleteAllTasks = () => {
    showAlert(true, 'danger', 'All Tasks Removed!')
    setList([])
  }

  // Function to Delete a Single Task
  const deleteTask = (id, title) => {
    showAlert(true, 'less-danger', `${title} 'task' Removed!`)
    setList(list.filter((task) => task.id !== id))
  }

  // Function to Edit a selected Task
  const editTask = (id) => {
    const specificTask = list.find((task) => task.id === id)
    setIsEditing(true)
    setEditID(id)
    setTask(specificTask.title)
  }

  // useEffect Function to Save List Array to LocalStorage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <>
      <main className="container">
        <form className="list-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

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
          <List tasklist={list} deleteTask={deleteTask} editTask={editTask} />
          <button className="clear-btn" onClick={deleteAllTasks}>Delete Tasks</button>
        </div>
      </main>
    </>
  );
}

export default App;
