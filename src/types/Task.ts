export interface Task {
    id: string;
    name: string; 
    completed: boolean; 
}

export interface TaskFormData {
  name: string;
  completed: boolean;
}

export interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TaskFormData) => void;
}
