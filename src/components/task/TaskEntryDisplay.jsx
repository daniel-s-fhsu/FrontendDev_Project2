function TaskEntryDisplay({ id, taskName, description, handleDelete }) {
    const handleClick = () => {
      handleDelete(id);
    };
  
    return (
      <li>
        {taskName} :: {description} <button onClick={handleClick}>Delete</button>
      </li>
    );
  }
  
  export default TaskEntryDisplay;