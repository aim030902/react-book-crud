import { useContext } from 'react'
import BookItem from '../book-item/BookItem'
import './BookList.css'
import { Context } from '../../context'
import { onFilterHandler, onTermHandler } from '../../utils'

const BookList = () => {
  const { state, dispatch } = useContext(Context);
  // const books = onTermHandler(onFilterHandler(state.books)).slice((state.currentPage - 1) * 10, (state.currentPage - 1) * 10 + 10)
  
  const books = onTermHandler(onFilterHandler(state.books, state.filter), state.term).slice((state.currentPage - 1) * 10, (state.currentPage - 1) * 10 + 10);

  return (

    <div className='book-list'>
      { books.length == 0 
        ? <p className='text-danger text-center fs-3 mb-0'>Kitoblar mavjud emas !</p>
        : books.map(book => (
          <BookItem key={book.id} book={book} />
        ))
      }
    </div>
  )
}

export default BookList