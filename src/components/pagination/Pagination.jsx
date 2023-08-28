import { useContext, useState } from 'react'
import './Pagination.css'
import { Context } from '../../context';
import { onFilterHandler, onTermHandler } from '../../utils';

const Pagination = () => {

    const { state, dispatch } = useContext(Context);

    const [ activePage, setActivePage ] = useState(1);


    const pageCount = Math.ceil(onTermHandler(onFilterHandler(state.books, state.filter), state.term).length / 10);

    const changePage = (pageNumber) => {
        setActivePage(pageNumber);
        dispatch({type: 'SET_CURRENT_PAGE', payload: pageNumber })
    }

  return (
    <div className='mt-4 d-flex justify-content-center'>
        <nav aria-label="Page navigation example">
            <ul className="pagination text-dark">
                { activePage != 1 && 
                    <li className="page-item" onClick={() => changePage(activePage - 1)}>
                        <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                }
                {[...Array(pageCount)].map((_, idx) => (
                    <li key={idx + 1} onClick={() => changePage(idx + 1)} className="page-item"><a className={`page-link ${activePage == idx + 1 && 'page-active'}`}>{idx + 1}</a></li>
                ))}

                { activePage != pageCount && 
                    <li className="page-item" onClick={() => changePage(activePage + 1)}>
                        <a className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                }                
            </ul>
        </nav>
    </div>
  )
}

export default Pagination