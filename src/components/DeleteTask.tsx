import React from 'react'; 
import type { Task } from '../types/Task';

interface DeleteTaskProps {
    isOpen: boolean;
    task: Task;
    onClose: () => void;
    onConfirm: () => void; 
}

const DeleteTask: React.FC<DeleteTaskProps> = ({
    isOpen, 
    task,
    onClose,
    onConfirm,
}) => {
    if (!isOpen) return null

    return (
        <div className='modal'>
            <div className='modal-content'>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to remove <strong>{task.name}</strong>?</p>
                <button onClick={onConfirm} className='danger'>Yes, Delete</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default DeleteTask; 
