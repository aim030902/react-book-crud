import React from 'react'

const Loader = () => {
  return (
    <div className='text-center'>
        <button className="btn btn-dark" type="button" disabled>
            <span className="spinner-border spinner-border-sm me-3" aria-hidden="true"></span>
            <span role="status">Loading...</span>
        </button>
    </div>
  )
}

export default Loader