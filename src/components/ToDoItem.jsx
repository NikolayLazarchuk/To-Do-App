import React, { useEffect, useState } from "react";
import "../App.css";

export const ToDoItem = () => {
  const retrieveTodosFromLocalStorage = () => {   // завантажує картки з localStorage
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [content, setContent] = useState(retrieveTodosFromLocalStorage());
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {                          // зберігає картки у localStorage при кожній зміні стану content
    localStorage.setItem("todos", JSON.stringify(content));
  }, [content]);

  const deleteElement = (id) => {            //видаляє картки.
    const updatedContent = content.filter((item) => item.id !== id);
    setContent(updatedContent);
  };

  const addElement = () => {                 //додає нове картки.
    if (inputValue.trim() === "") {
      return;
    }
    const newElement = { id: Date.now(), text: inputValue };  // Date.now() використовується для генерації унікального id. Ця функція повертає кількість мілісекунд, що минули з 1 січня 1970 року (так званої "Unix epoch"). Оскільки Date.now() завжди повертає нове значення, щоразу коли ви викликаєте цю функцію, вона генерує унікальний ідентифікатор.
    setContent([...content, newElement]);
    setInputValue("");
  };

  const toggleCheck = (id) => {              //змінює стан виконання картки (відмічено/не відмічено).
    const updatedContent = content.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setContent(updatedContent);
  };

  return (
    <div>
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
        <div key={item.id} className="just-div">
          <input
            type="checkbox"
            checked={item.checked || false}
            onChange={() => toggleCheck(item.id)}
          />
          <p className={item.checked ? "text-decoration-line-through" : "text-decoration-none"}>
            {item.text}
          </p>
          <button className="delete-button" onClick={() => deleteElement(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

