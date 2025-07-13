# 📝 TaskTracker

A modern task management application built with **React**, **TypeScript**, and **Auth0**. TaskTracker provides a secure, responsive, and user-friendly dashboard for creating, editing, viewing, and managing tasks.

---

## 🚀 Features

### ✅ Task Management
- **Task Dashboard Page**  
  View and manage your tasks from a centralized dashboard, including:
  - Task listing with status indicators
  - Task creation and editing via modal forms
  - Secure deletion functionality

- **Task Details Display**  
  Access full information for each task and update details inline.

- **Task Creation & Editing Pages**  
  - Fully typed input forms using **TypeScript** interfaces
  - Inline validation and error messaging
  - Styled inputs for better user experience

---

## 🔐 Authentication & Authorization

- Integrated **Auth0** for secure login and user session management
- Registration and login pages handled through Auth0’s universal login
- Authenticated routes restrict access to dashboard features
- Typed user data ensures secure and readable access to Auth0 objects

---

## ⚙️ TypeScript Integration

- Strong **TypeScript** support throughout the app:
  - Custom interfaces and type aliases for tasks, users, and context values
  - Typed `useState` hooks for form and dashboard state
  - Type-safe props and component composition

- Enforced type-checking with tight coupling to form validation, modal behavior, and task logic

---

## 📦 State Management

### 🔁 useState Hooks with TypeScript
- Each functional component maintains its state using strictly typed `useState`
- Ensures predictable state behavior and eliminates runtime errors

### 🌐 Context API for Global State
- Shared application state (e.g., auth status, task list) managed via the **Context API**
- Centralizes data access and enables seamless cross-component updates

---

## 🧠 Error Handling & Validation

- Client-side validation using **TypeScript-aware logic** for:
  - Empty field handling
  - Checkbox status
  - Edge case detection in modal interactions

- Form errors displayed inline with accessible styling

---

## 🛠️ Setup & Installation

Follow these steps to get TaskTracker up and running locally.

### 🔧 Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (version 16+ recommended)
- [npm](https://www.npmjs.com/) for managing packages

---

### 📦 Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/TyB3ar/Task-Management-App
cd task-management
```

2. **Install Dependencies**

```bash
npm install  
```

3. **Start the Development Server**

```bash
npm run dev
```
