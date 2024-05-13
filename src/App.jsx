import { useState } from "react";
import "./App.css";
import { ToDoItem } from "./components/ToDoItem";

const myTodo = [
  { text: "To do  1" },
  { text: "To do  2" },
  { text: "To do  3" },
];

function App() {
  const [content, setContent] = useState(myTodo);
  const [inputValue, setInputValue] = useState("");

  
  function deleteElement(index) {                                     // Функція для видалення елемента зі списку справ
    const updatedContent = content.filter((_, i) => i !== index);     // Створення нового масиву, в якому видаляється елемент з певним індексом 
    setContent(updatedContent);                                       // Оновлення стану content
  }

  function addElement() {
    if (inputValue.trim() === "") {
      return;                                                         // Якщо порожній рядок, не робимо нічого
    }
    const newElement = { text: inputValue };
    console.info(newElement);
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
      <button onClick={addElement} className="add-button">Add card</button>
      </div>
      {content.map((item, index) => (
        <ToDoItem
          key={index}
          fromText={item.text}
          onDelete={() => deleteElement(index)}
        />
      ))}
    </div>
  );
}

export default App;
