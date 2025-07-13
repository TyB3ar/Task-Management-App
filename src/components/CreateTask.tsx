import React, { useEffect, useRef, useState } from 'react';
import type { TaskModalProps } from '../types/Task';

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({ name: '', completed: false }); 
    const [errors, setErrors] = useState<{ name?: string }>({}); 
    const modalRef = useRef<HTMLDivElement>(null); 

    // Close Modal on outside click 
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return() => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]); 

    const validate = () => {
        const newErrors: { name?: string } = {}; 
        if (!formData.name.trim()) newErrors.name = 'Task name is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        if (validate()) {
            onSubmit(formData);
            onClose(); 
            setFormData({ name: '', completed: false });
        }
    };

    if (!isOpen) return null; 

    return (
        <div className='modal-overlay'>
            <div className='modal-content' ref={modalRef}>
                <button
                className='close-button'
                onClick={onClose}
                aria-label='Close'
                >x</button>
                <form onSubmit={handleSubmit}>
                    <label>Task Name:
                        <input 
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </label>
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                    <label>
                        Completed: 
                        <input 
                        type="checkbox"
                        checked={formData.completed}
                        onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
                        />
                    </label>

                    <button type="submit" className='login-btn'>Save Task</button>
                </form>
            </div>
        </div>
    );
};

export default TaskModal; 
