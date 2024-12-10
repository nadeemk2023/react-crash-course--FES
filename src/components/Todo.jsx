import './Todo.css';

function Todo({ title }) {
  function deleteTodo(id) {
    console.log('Delete button clicked', id);
  }

  return (
    <div className='todo'>
      <p>{title}</p>
      <button onClick={() => deleteTodo(1)}>Delete</button>
    </div>
  );
}

export default Todo;
