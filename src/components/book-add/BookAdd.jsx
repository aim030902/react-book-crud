import { useContext, useState } from 'react';
import './BookAdd.css'
import { Context } from '../../context';

const BookAdd = () => {

  const { state, dispatch } = useContext(Context);

  const [ name, setName] = useState('');
  const [ readCount, setReadCount] = useState('');

  const addHandler = (e) => {
    e.preventDefault();
    if(name == '' || readCount == '') return;
    dispatch({ type: 'ON_ADD', payload: { name, readCount }})

    setName('')
    setReadCount('')
  }

  return (
    <div className='book-add' onSubmit={addHandler}>
      <h3>Yangi kitob qo'shish</h3>
      <form className="d-flex gap-2 mt-4">
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='form-control p-3' placeholder='Kitob nomi' />
        <input type="number" onChange={(e) => setReadCount(e.target.value)} value={readCount} className='form-control' placeholder="O'qilishlar soni" />
        <button type='submit' className='btn btn-dark'>Qo'shish</button>
      </form>
    </div>
  )
}

export default BookAdd