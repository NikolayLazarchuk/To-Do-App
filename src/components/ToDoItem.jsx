export const ToDoItem = ({ fromText, onDelete }) => {
  return (
    <div className="just-div">
      <input type="checkbox" />
      <p>{fromText}</p>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
};
