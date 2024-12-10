import { useState } from 'react';
import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import Counter from './components/Counter.jsx';

function App() {
  const [showModal, setShowModal] = useState(false);

  return <Counter />;

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
        <Todo title='Finish Frontend Simplified' />
        <Todo title='Finish Interview Section' />
        <Todo title='Land a $100k Job' />
      </div>
      {showModal && <Modal title='Confirm delete?' />}
    </>
  );
}

export default App;
