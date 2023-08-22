import './BookItem.css'

const BookItem = ({ book, onLikeHandler, onSavedHandler, onDeleteHandler }) => {
  return (
    <li className='book-item d-flex flex-direction-column justify-content-between align-items-center p-3 '>
      <p className={`book-name fs-4 mb-0 w-50 ${book.isSaved && 'text-primary'}`} onDoubleClick={() => onLikeHandler(book.id)}>{book.name}</p>
      <input type="number" className={`readCount text-center bg-transparent border-0 fs-5 p-2 ${book.isSaved ? 'text-primary' : 'text-light'}`} defaultValue={book.readCount} />
      <div className="icons">
        <i className="fa-solid fa-trash text-warning me-4 fs-4" onClick={() => onDeleteHandler(book.id)}></i>
        <i className={`${book.isSaved ? 'fa-solid' : 'fa-regular' } text-primary fa-bookmark me-4 fs-4`} onClick={() => onSavedHandler(book.id)}></i>
        <i className={`${book.isLike ? 'fa-solid' : 'fa-regular' } text-danger fa-heart fs-4`} onClick={() => onLikeHandler(book.id)}></i>
      </div>
    </li>
  )
}

export default BookItem