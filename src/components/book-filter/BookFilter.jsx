import { useContext, useState } from 'react'
import './BookFilter.css'
import { Context } from '../../context';

const BookFilter = () => {

  const { _, dispatch } = useContext(Context);

  const [ filter, setFilter ] = useState('all');

  const filterHandler = (title) => {
    dispatch({ type: 'SET_FILTER', payload: title })
    setFilter(title)
  }

  return (
    <div className='btn-group w-100 gap-1'>
      {btns.map(btn => (
        <button key={btn.id} onClick={() => filterHandler(btn.title)} className={`btn ${btn.title == filter ? 'btn-dark': 'btn-white'}`}>{btn.name}</button>
      ))}
    </div>
  )
}

const btns = [
  {
    id: 1,
    name: 'Barcha kinolar',
    title: 'all',
    isActive: true
  },
  {
    id: 2,
    name: "Eng ko'p ko'rilgan kinolar",
    title: 'popular',
    isActive: false
  },
  {
    id: 3,
    name: 'Saqlangan kinolar',
    title: 'saved',
    isActive: false
  }
]

export default BookFilter