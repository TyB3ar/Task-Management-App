import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard';
import type { Task, TaskFormData } from './types/Task';
import LoginButton from './authorization/LoginButton';
import LogoutButton from './authorization/LogoutButtons';
import './App.css';

const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  const [tasks, setTasks] = useState<Task[]>([])

  const handleCreate = (newTaskData: TaskFormData) => {
    const newTask: Task = {
      ...newTaskData,
      id: crypto.randomUUID(), // temporary local ID
      completed: false
    }
    setTasks(prev => [...prev, newTask])
  }

  const handleEdit = (updatedTask: Task) => {
    setTasks(prev => prev.map(task => task.id === updatedTask.id ? updatedTask : task))
  }

  const handleDelete = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  if (isLoading) return <p>Loading user...</p>

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="login-screen">
          <h2>Welcome to TaskTracker!</h2>
          <p>Sign in to manage your tasks efficiently.</p>
          <LoginButton />
        </div>
      ) : (
        <>
          <Dashboard
            tasks={tasks}
            onCreate={handleCreate}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <LogoutButton />
        </>
      )}
    </div>
  )
}

export default App;