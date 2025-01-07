function TodoItem({ item, onDelete }) {
    return (
      <div>
        <span>{item}</span>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }
  
  export default TodoItem;
  