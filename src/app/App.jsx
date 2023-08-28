import './App.css'
import { BookInfo, BookFilter, BookSearch, BookList, BookAdd, Loader, Pagination } from '../components'
import { useContext, useEffect } from 'react'
import { Context } from '../context'
import { onFilterHandler, onTermHandler } from '../utils'

const App = () => {

  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    let id = 4;
    dispatch({ type: 'SET_ISLOADING', payload: true })

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
          dispatch({ type: 'SET_BOOKS', payload:  [...loadData]})
        })
        .finally(setTimeout(() => {
          dispatch({ type: 'SET_ISLOADING', payload: false })
        }, 500));
  }, []);
  
  return (
    <div className='container'>
      <div className="app font-monospace">
        <BookInfo />
        <div className="sf">
          <BookFilter />
          <BookSearch />
        </div>
        { state.isLoading
          ? <Loader />
          : <BookList />
        }
        { (!state.isLoading && onTermHandler(onFilterHandler(state.books, state.filter), state.term).length > 10) && <Pagination />}
        <BookAdd />
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
