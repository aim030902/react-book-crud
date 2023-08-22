import { useState } from 'react';
import './BookSearch.css';

const BookSearch = ({ setTermHandler }) => {
  
  const [ term, setTerm ] = useState('');

  const termHandler = (e) => {
    const termValue = e.target.value;
    setTerm(termValue);
    setTermHandler(termValue);
  }

  return (
    <div className='book-search'>
      <input type="text" onChange={termHandler} value={term} className='form-control p-3' placeholder='Search...' />
    </div>
  )
}

export default BookSearch