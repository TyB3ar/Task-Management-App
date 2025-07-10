import React, { useState } from 'react'; 
import type { Task } from '../types/Task'; 


interface EditTaskProps {
    isOpen: boolean; 
    onClose: () => void; 
    task: Task; 
    onSubmit: (updatedTask: Task) => void; 
}

const EditTask: React.FC<EditTaskProps> = ({ isOpen, onClose, task, onSubmit }) => {
    const [taskName, setTaskName] = useState(task.name)
    const [completed, setCompleted] = useState(task.completed)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(taskName.trim() === '') {
            setError('Task name cannot be empty')
            return 
        }

        onSubmit({ ...task, name: taskName, completed });
        onClose(); 
    };

    if(!isOpen) return null;

    return (
        <div className="modal">
            <form onSubmit={handleSubmit} className="modal-content">
                <h2>Edit Task</h2>
                <label>
                    Title:
                    <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Completed:
                    <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    />
                </label>
                {error && <p className="error">{error}</p>}
                <button type="submit">Save Changes</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EditTask; 
