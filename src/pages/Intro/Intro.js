import React, { useState } from 'react'
import classes from './Intro.module.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const Intro = () => {
  const dispatch = useDispatch()
  const [start, setStart] = useState(false)
  const [characterName, setCharacterName] = useState('some random loser')
  const [continueToNext, setContinueToNext] = useState(false)

  const characterNameHandler = () =>
    dispatch({
      type: 'CHARACTER_NAME',
      characterName
    })

  return (
    <div className={classes.mainscreen}>
      {!start && (
        <>
          <h1>Once upon a time in a pub...</h1>
          <button onClick={setStart}>START</button>
        </>
      )}
      {start && !continueToNext && (
        <>
          <p>Please enter your character's name in the field below</p>
          <input
            type='text'
            placeholder='Enter name here...'
            onInput={event => setCharacterName(event.target.value)}
          ></input>
          <button onClick={(characterNameHandler, setContinueToNext)}>
            Continue...
          </button>
        </>
      )}
      {continueToNext && (
        <>
          <p>
            &nbsp;&nbsp;&nbsp;Well, {characterName}, do you remember that one
            time when your pockets were almost empty but your thirst was mighty,
            and you walked into this one pub?
          </p>
          <Link className={classes.link} to='/Scene_pub'>
            Um... okay?
          </Link>
          )
        </>
      )}
    </div>
  )
}

export default Intro
