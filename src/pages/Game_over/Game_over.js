import React from 'react'
import classes from './Game_over.module.css'
import { Link } from 'react-router-dom'

export const Game_over = () => {
  return (
    <div className={classes.mainscreen}>
      <h1>GAME OVER</h1>
      <Link className={classes.link} to='/'>
        Visit the pub again?
      </Link>
    </div>
  )
}

export default Game_over
