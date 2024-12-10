import './Modal.css';

function Modal({ title }) {
  return (
    <>
      <div className='modal'>
        <p className='modal__title'>{title}</p>
        <div className='modal__buttons'>
          <button
            onClick={() => console.log('Cancel Delete Button Clicked')}
            className='btn btn__cancel'
          >
            Cancel
          </button>
          <button
            onClick={() => console.log('Confirm Delete Button Clicked')}
            className='btn'
          >
            Confirm
          </button>
        </div>
      </div>
      <div className='backdrop' />
    </>
  );
}

export default Modal;
