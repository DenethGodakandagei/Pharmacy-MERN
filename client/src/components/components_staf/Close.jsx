import React from 'react'
import { Link } from 'react-router-dom'

const Close = () => {
  return (
    <div className='flex '><Link to={'/'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6 bg-red-500 rounded-lg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg> </Link>
  </div>
  )
}

export default Close