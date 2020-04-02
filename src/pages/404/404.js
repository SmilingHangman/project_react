import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
      <h2>404! This page does not exist!</h2>
      <Link to='/'>Link</Link>
    </div>
  )
}
