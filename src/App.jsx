import { useState } from 'react';
import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
// import Counter from './components/Counter.jsx';

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
    console.log('onTodoDelete()');
  }

  function onCancelDelete() {
    setShowModal(false);
    console.log('onCancelDelete()');
  }

  function onConfirmDelete() {
    setShowModal(false);
    console.log('onConfirmDelete()');
  }

  return (
    <>
      <Title />
      <div>
        <input
          type='text'
          onChange={event => console.log(event.target.value)}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className='todo__wrapper'>
        <Todo title='Finish Frontend Simplified' onTodoDelete={onTodoDelete} />
        <Todo title='Finish Interview Section' onTodoDelete={onTodoDelete} />
        <Todo title='Land a $100k Job' onTodoDelete={onTodoDelete} />
      </div>
      {showModal && (
        <Modal
          title='Confirm delete?'
          onConfirmDelete={onConfirmDelete}
          onCancelDelete={onCancelDelete}
        />
      )}
    </>
  );
  // return <Counter />;
}

export default App;
