import React, { useState } from "react";
import Form from "./components/App/Form/Form";
import "./App.css";

const App = () => {
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [todos, setTodos] = useState([]);

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), Text: value, done: false }]);
    } else {
      alert("введите текст");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          done: !todo.done,
        };
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, text) => {
    setEdit(true);
    setEditId(id);
    setEditText(text);
  };

  const saveTodo = (id, e) => {
    e.stopPropagation();
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          Text: editText,
        };
      })
    );
    setEdit(false);
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">Todo Contact Book </h1>
        <Form putTodo={putTodo} />
        <ul className="todos">
          {todos.map((todo) => {
            return (
              <li
                className={todo.done ? "todo done" : "todo"}
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
              >
                {edit && todo.id === editId ? (
                  <div>
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={(e) => saveTodo(todo.id, e)}>
                      Сохранить{" "}
                    </button>
                  </div>
                ) : (
                  <div>{todo.Text}</div>
                )}
                <img
                  src="./delete.png"
                  alt="delete"
                  className="delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTodo(todo.id);
                  }}
                />
                {!edit && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      editTodo(todo.id, todo.Text);
                    }}
                  >
                    Редактировать
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
