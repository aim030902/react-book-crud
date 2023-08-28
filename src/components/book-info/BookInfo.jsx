import { useContext } from 'react'
import './BookInfo.css'
import { Context } from '../../context'


const BookInfo = () => {
  const { state, _ } = useContext(Context);

  return (
    <div className='book-info'>
      <h3>Barcha kitoblar soni: {state.books.length} </h3>
      <h4>Sevimli kitoblar soni: {state.books.filter(book => book.isLike).length} </h4>
    </div>
  )
}

export default BookInfo