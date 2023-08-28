import { useContext, useState } from 'react';
import './BookSearch.css';
import { Context } from '../../context';

const BookSearch = () => {

  const { _, dispatch } = useContext(Context);
  
  const [ term, setTerm ] = useState('');

  const termHandler = (e) => {
    const termValue = e.target.value;
    setTerm(termValue);
    dispatch({ type: 'SET_TERM', payload: termHandler })
  }

  return (
    <div className='book-search'>
      <input type="text" onChange={termHandler} value={term} className='form-control p-3' placeholder='Search...' />
    </div>
  )
}

export default BookSearch