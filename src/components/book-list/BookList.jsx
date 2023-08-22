import BookItem from '../book-item/BookItem'
import Pagination from '../pagination/Pagination'
import './BookList.css'

const BookList = ({ books, onLikeHandler, onSavedHandler, onDeleteHandler }) => {
  return (
    <div className='book-list'>
      { books.length == 0 
        ? <p className='text-danger text-center fs-3 mb-0'>Kitoblar mavjud emas !</p>
        : books.map(book => (
          <BookItem key={book.id} book={book} onLikeHandler={onLikeHandler} onSavedHandler={onSavedHandler} onDeleteHandler={onDeleteHandler} />
        ))
      }
    </div>
  )
}

export default BookList