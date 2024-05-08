import React from 'react'
import { Link } from 'react-router-dom'

const Unavailable = () => {
  return (
    <>
        <h1 className='text-red-500 font-bold'>This Page Not Found</h1>
        <Link to="/imdb/">
            <button className="btn text-white">Back</button>
        </Link>
    </>
  )
}

export default Unavailable