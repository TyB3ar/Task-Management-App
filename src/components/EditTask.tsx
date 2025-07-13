import React, { useState, useEffect } from 'react'; 
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

    // Adding effect to update task info for editing 
    useEffect(() => {
        if (isOpen) {
            setTaskName(task.name);
            setCompleted(task.completed);
            setError(null); 
        }
    }, [isOpen, task]); 

    // handle submit button, on submit update Task information, TaskName can't be empty
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
            <form onSubmit={handleSubmit} className="modal-content p-4">
                <h2>Edit Task</h2>
                <div>
                    <label>
                      Title:  
                      <input
                      type="text"
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                      required
                      />
                    </label> 
                </div>
                <div>
                    <label>
                      Completed:
                      <input
                      type="checkbox"
                      checked={completed}
                      onChange={(e) => setCompleted(e.target.checked)}
                      />
                    </label>
                </div>
                
                {error && <p className="error">{error}</p>}
                <button type="submit" className='login-btn'>Save Changes</button>
                <button type="button" className='danger' onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EditTask; 
