import React, { useState, } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";


const TodoWrapper = () => {
  const [todos, setTodos] = useState( [
    {
      "id": 1,
      "task": "Angular Developer - Nucore - 5",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 2,
      "task": "Asp.net Developer - Logiology - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 3,
      "task": "Associate Software Engineer - Camerin - 8",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 4,
      "task": "Data Analyst - Doctosmart - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 5,
      "task": "Data Analyst - Innominz - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 6,
      "task": "Data Scientist - Doctosmart - 1",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 7,
      "task": "Data Scientist - Softroniics - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 8,
      "task": "Devops Trainee - Nuox - 1",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 9,
      "task": "Dot Net Developer - Ionob - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 10,
      "task": "Flutter Developer - M2H - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 11,
      "task": "Flutter Developer - Doctosmart - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 12,
      "task": "Flutter Developer - Cyber - 1",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 13,
      "task": "Flutter Developer - Ipix - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 14,
      "task": "Flutter Full Stack Developer - Softroniics - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 15,
      "task": "Front-End Developer - Yarddiant - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 16,
      "task": "Full Stack Developer - Faith - 30",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 17,
      "task": "Full Stack Developer - Softroniics - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 18,
      "task": "Internship -Dot Net - Aabasoft - 4",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 19,
      "task": "Java Developer - M2H - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 20,
      "task": "Java Developer - Doctosmart - 1",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 21,
      "task": "Junior Developer - Acodez - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 22,
      "task": "Junior System Engineer - Supportsages - 10",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 23,
      "task": "Junior Web Developer - Limenzy - 5",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 24,
      "task": "Laravel Developer - Yarddiant - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 25,
      "task": "Laravel Developer - Ipix - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 26,
      "task": "Laravel Developer - Infinite - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 27,
      "task": "Mern Full Stack Developer - Softroniics - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 28,
      "task": "Mern Stack Developer - Ipix - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 29,
      "task": "Mern Stack Developer - Infinite - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 30,
      "task": "Mern Stack Developer - Doctosmart - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 31,
      "task": "Node.js Developer - Netstager - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 32,
      "task": "Node.js Developer - Nucore - 4",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 33,
      "task": "Node.js Developer - M2H - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 34,
      "task": "Node.js Developer - Stackroots - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 35,
      "task": "Odoo Functional Consultant - Cybrosys - 4",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 36,
      "task": "Php Developer - Doctosmart - 1",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 37,
      "task": "Php Developer - Codelattice - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 38,
      "task": "Php Developer - Nucore - 5",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 39,
      "task": "Python Developer - Nucore - 4",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 40,
      "task": "Python Developer - Infinite - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 41,
      "task": "Python Development Intern - Codeace - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 42,
      "task": "Python Fullstack Developer - Softroniics - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 43,
      "task": "Python Trainee - Nuox - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 44,
      "task": "Python/Odoo Developer - Cybrosys - 20",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 45,
      "task": "React Developer - M2H - 2",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 46,
      "task": "React Developer - Stackroots - 1",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 47,
      "task": "React Js Trainee - Nuox - 1",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 48,
      "task": "Software Developer - Softroniics - 5",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 49,
      "task": "Software Developer - Appsure - 3",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 50,
      "task": "Software Developer - Codelattice - 5",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 51,
      "task": "System Admin - Cybrosys - 1",
      "completed": false,
      "isEditing": false
    },
    {
      "id": 52,
      "task": "Web Developer - Techbrein - 2",
      "completed": false,
      "isEditing": false
    }
  ]);



  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTask={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
