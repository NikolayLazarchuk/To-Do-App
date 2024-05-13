import React, { useState } from "react";
import "./App.css";
import { ToDoItem } from "./components/ToDoItem";

const myTodo = [
  { id: 1, text: "Завдання  1" },

];

function App() {
  const [content, setContent] = useState(myTodo);
  const [inputValue, setInputValue] = useState("");

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
