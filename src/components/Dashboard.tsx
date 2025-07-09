import React from 'react'; 
import { useAuth0 } from '@auth0/auth0-react';
import type { Task } from '../types/Task'; 

interface DashboardProps {
    tasks: Task[];
    onDelete: (id: string) => void; 
    onEdit: (task: Task) => void;
    onCreate: () => void; 
}

const Dashboard: React.FC<DashboardProps> = ({ tasks, onDelete, onEdit, onCreate }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

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
        <button onClick={onCreate}>➕ New Task</button>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <strong>{task.name}</strong> - {task.completed ? '✅ Done' : '❌ Not done'}
                    <button onClick={() => onEdit(task)}>✏️ Edit</button>
                    <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
    </div>
  );
};

export default Dashboard; 
