import React, { useState, useEffect } from "react";
import "./App.css";
import { ToDoItem } from "./components/ToDoItem";

// Завантажуємо збережені завдання з localStorage
const retrivCardFromLocalStorage = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

function App() {
  const [content, setContent] = useState(retrivCardFromLocalStorage());
  const [inputValue, setInputValue] = useState("");

  // Зберігаємо завдання в localStorage при зміні content
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(content));
  }, [content]);

  function deleteElement(id) {
    const updatedContent = content.filter((item) => item.id !== id);
    setContent(updatedContent);
  }

  function addElement() {
    if (inputValue.trim() === "") {
      return;
    }
    const newElement = { id: Date.now(), text: inputValue };
    setContent([...content, newElement]);
    setInputValue("");
  }

  return (
    <div className="App">
      <div className="input-container">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="my-input"
          type="text"
        />
        <button onClick={addElement} className="add-button">
          Add card
        </button>
      </div>
      {content.map((item) => (
        <ToDoItem
          key={item.id}
          fromText={item.text}
          onDelete={() => deleteElement(item.id)}
        />
      ))}
    </div>
  );
}

export default App;

