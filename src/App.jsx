import { useState, useEffect } from 'react';
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

  function cancelModal() {
    setShowModal(false);
    console.log('cancelModal()');
  }

  function confirmModal() {
    setShowModal(false);
    console.log('confirmModal()');
  }

  useEffect(() => {
    console.log('on mount');
  }, []);

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
          confirmModal={confirmModal}
          cancelModal={cancelModal}
        />
      )}
    </>
  );
  // return <Counter />;
}

export default App;
