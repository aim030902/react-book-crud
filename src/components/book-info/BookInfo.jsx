import './BookInfo.css'

const BookInfo = ({books}) => {
  return (
    <div className='book-info'>
      <h3>Barcha kitoblar soni: {books.length} </h3>
      <h4>Sevimli kitoblar soni: {books.filter(book => book.isLike).length} </h4>
    </div>
  )
}

export default BookInfo