import './App.css'
import { BookInfo, BookFilter, BookSearch, BookList, BookAdd, Loader, Pagination } from '../components'
import { useEffect, useState } from 'react'

const App = () => {

  const [books, setBooks] = useState([]);

  const [ term, setTerm ] = useState('');
  const [ filter, setFilter ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    let id = 4;
    setIsLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(json => {
          const loadData = json.map(item => {
            return {
              id: id++,
              name: item.title,
              readCount: Math.floor(Math.random() * 1500),
              isSaved: false,
              isLike: false
            }
          })
          setBooks([...loadData])
        })
        .finally(setTimeout(() => {
          setIsLoading(false)
        }, 500));
  }, []);
  
  const onLikeHandler = (id) => {
    setBooks(books.map(book => {
      if(book.id === id) {
        return {...book, isLike: !book.isLike}
      }
      return book;
    }))
  }

  const onSavedHandler = (id) => {
    setBooks(books.map(book => {
      if(book.id === id) {
        return {...book, isSaved: !book.isSaved}
      }
      return book;
    }))
  }

  const onDeleteHandler = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const onAddHandler = (book) => {
    setBooks([...books, {...book, id: books.length + 1, isLike: false, isSaved: false}])
  }

  const setTermHandler = (term) => setTerm(term);
  const setFilterHandler = (filter) => setFilter(filter);

  const onTermHandler = (books) => {
    if(term == '') return books;
    return books.filter(book => book.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }

  const onFilterHandler = (books) => {
    switch(filter) {
      case 'popular': return books.filter(book => book.readCount > 800).sort((a, b) => b.readCount - a.readCount);
      case 'saved': return books.filter(book => book.isSaved);
      default: return books;
    }
  }

  const setCurrentPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  }



  

  return (
    <div className='container'>
      <div className="app font-monospace">
        <BookInfo books={books} />
        <div className="sf">
          <BookFilter setFilterHandler={setFilterHandler} />
          <BookSearch setTermHandler={setTermHandler} />
        </div>
        { isLoading
          ? <Loader />
          : <BookList books={onTermHandler(onFilterHandler(books)).slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)} onLikeHandler={onLikeHandler} onSavedHandler={onSavedHandler} onDeleteHandler={onDeleteHandler} />
        }
        { !isLoading && <Pagination pageCount={Math.ceil(books.length / 10)} setCurrentPageHandler={setCurrentPageHandler} />}
        <BookAdd onAddHandler={onAddHandler} />
      </div>
    </div>
  )
}

const data = [
  {
    id: 1,
    name: 'Bolalik',
    readCount: 988,
    isSaved: true,
    isLike: true
  },
  {
    id: 2,
    name: 'Temur tuzuklari',
    readCount: 877,
    isSaved: true,
    isLike: true
  },
  {
    id: 3,
    name: 'Sehrli qalpoqcha',
    readCount: 766,
    isSaved: true,
    isLike: true
  }
]

export default App