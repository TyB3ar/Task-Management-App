import React, { useState } from 'react'; 
import { useAuth0 } from '@auth0/auth0-react';
import type { Task, TaskFormData } from '../types/Task'; 
import TaskModal from './CreateTask';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

interface DashboardProps {
    tasks: Task[];
    onDelete: (id: string) => void; 
    onEdit: (task: Task) => void;
    onCreate: (task: TaskFormData) => void; 
}

const Dashboard: React.FC<DashboardProps> = ({ tasks, onDelete, onEdit, onCreate }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [isModalOpen, setModalOpen] = useState(false); 
  const [isEditOpen, setEditOpen] = useState(false); 
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null); 
  const [isDeleteOpen, setDeleteOpen] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null)

  if (!isAuthenticated) {
    return (
        <div>
            <h2>Please log in to manage your tasks!</h2>
            <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    );
  }

  return (
    <div>
        <h1>Welcome, {user?.name}!</h1>
        <button onClick={() => setModalOpen(true)}>➕ New Task</button>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <strong>{task.name}</strong> - {task.completed ? '✅ Done' : '❌ Not done'}
                    <button onClick={() => {
                      setTaskToEdit(task)
                      setEditOpen(true)
                    }} className='warning'>✏️ Edit</button>
                    <button onClick={() => {
                      setTaskToDelete(task)
                      setDeleteOpen(true)
                    }} className='danger'>🗑️ Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
        </button>

        <TaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(formData) => {
          onCreate(formData);
          setModalOpen(false);
        }}
        />

        {taskToEdit && (
          <EditTask
            isOpen={isEditOpen}
            task={taskToEdit}
            onClose={() => setEditOpen(false)}
            onSubmit={(updated) => {
              onEdit(updated)
              setEditOpen(false)
            }}
          />
        )}

        {taskToDelete && (
          <DeleteTask
            isOpen={isDeleteOpen}
            task={taskToDelete}
            onClose={() => setDeleteOpen(false)}
            onConfirm={() => {
              onDelete(taskToDelete.id)
              setDeleteOpen(false)
              alert(`✅ Task "${taskToDelete.name}" deleted.`)
            }}
          />
        )}

    </div>
  );
};

export default Dashboard; 
