import { useState } from 'react'
import './Pagination.css'

const Pagination = ({pageCount, setCurrentPageHandler}) => {

    const [ activePage, setActivePage ] = useState(1);

    const changePage = (pageNumber) => {
        setActivePage(pageNumber);
        setCurrentPageHandler(pageNumber)
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