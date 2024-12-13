import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// import { useState, useEffect } from 'react';
// import Todo from './components/Todo.jsx';
// import Title from './components/Title.jsx';
// import Modal from './components/Modal.jsx';
// import Counter from './components/Counter.jsx';

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
  //   const [showModal, setShowModal] = useState(false);
  //
  //   function onTodoDelete() {
  //     setShowModal(true);
  //     console.log('onTodoDelete()');
  //   }
  //
  //   function cancelModal() {
  //     setShowModal(false);
  //     console.log('cancelModal()');
  //   }
  //
  //   function confirmModal() {
  //     setShowModal(false);
  //     console.log('confirmModal()');
  //   }
  // <>
  //   <Title />
  //   <div>
  //     <input
  //       type='text'
  //       onChange={event => console.log(event.target.value)}
  //     />
  //     <button onClick={() => setShowModal(true)}>Add todo</button>
  //   </div>
  //   <div className='todo__wrapper'>
  //     <Todo title='Finish Frontend Simplified' onTodoDelete={onTodoDelete} />
  //     <Todo title='Finish Interview Section' onTodoDelete={onTodoDelete} />
  //     <Todo title='Land a $100k Job' onTodoDelete={onTodoDelete} />
  //   </div>
  //   {showModal && (
  //     <Modal
  //       title='Confirm delete?'
  //       confirmModal={confirmModal}
  //       cancelModal={cancelModal}
  //     />
  //   )}
  // </>
  // return <Counter />;
}

export default App;
