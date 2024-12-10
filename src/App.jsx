import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';

function App() {
  let isModalOpen = false;

  return (
    <>
      <Title />
      <div>
        <input
          type='text'
          onChange={event => console.log(event.target.value)}
        />
        <button>Add todo</button>
      </div>
      <div className='todo__wrapper'>
        <Todo title='Finish Frontend Simplified' />
        <Todo title='Finish Interview Section' />
        <Todo title='Land a $100k Job' />
      </div>
      {isModalOpen ? <Modal title='Confirm delete?' /> : null}
    </>
  );
}

export default App;
