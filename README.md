# TodoApp
    A simple and elegant Todo application built with ReactJS and Redux Toolkit. This app helps users manage their tasks by allowing them to add, mark as completed, and delete tasks. It also utilizes Redux Persist to retain the application state even after refreshing the page.

## Features
Add Tasks: Easily add new tasks using the input field.
Mark as Completed: Toggle tasks as completed or uncompleted.
Delete Tasks: Remove unwanted tasks from the list.
Persist State: Tasks are saved even after a page reload, thanks to Redux Persist.
Responsive Design: Fully responsive and mobile-friendly layout.
Interactive UI: Modern, shadowed buttons and transitions for a better user experience.
Tech Stack
Frontend: ReactJS, CSS
State Management: Redux Toolkit
Persistence: Redux Persist
Build Tool: CRA 
Installation and Setup
Follow the steps below to set up the project on your local machine.

### Clone the Repository

    - git clone https://github.com/sharpartzgh/TodoApp.git
    - cd TodoApp
    - Install Dependencies

    - npm install
    - Run the Development Server

    - npm start
    - Build for Production

## Project Structure

TodoApp/
│
├── src/
│   ├── components/
│   │   ├── TodoInput.js      # Input field and add button component
│   │   ├── TodoList.js       # Renders the list of todos
│   │   ├── TodoItem.js       # Represents a single todo item
│   │
│   ├── Redux/
│   │   │──slice
│   │       ├── todoSlice.js  # Redux logic for managing todos
│   │   ├── rootReducer.js    # Combines reducers
│   │   ├── store.js          # Configures Redux store with persist 
│   │
│   ├── styles/
│   │   ├── TodoApp.css       # All CSS for the app
│   │
│   ├── App.js                # Main App component
│   ├── index.js              # App entry point
│
├── .gitignore                # Ignored files for Git
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation

## How to Use
    - Add a Task: Type a task in the input field and click the Add button.
    - Mark as Completed: Click the checkbox next to a task to mark it as completed.
    - Delete a Task: Click the Delete button to remove a task.

## License
    - This project is licensed under the MIT License. Feel free to use it for personal or commercial purposes.
