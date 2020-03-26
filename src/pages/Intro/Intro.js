import React, { useState } from 'react'
import classes from './Intro.module.css'
import { useDispatch } from 'react-redux'

export const Intro = () => {
  const dispatch = useDispatch()
  const [start, setStart] = useState(false)
  const startStoryHandler = () => {
    setStart(!start)
  }
  const [characterName, setCharacterName] = useState('')
  const characterNameHandler = () =>
    dispatch({
      type: 'CHARACTER_NAME',
      characterName
    })
  console.log(characterName)

  return (
    <div className={classes.mainscreen}>
      {!start && (
        <>
          <h1>Once upon a time in a pub...</h1>
          <button onClick={startStoryHandler}>START</button>
        </>
      )}
      {start && (
        <>
          <p>Please enter your character's name in the field below</p>
          <input
            type='text'
            placeholder='Enter name here...'
            onInput={event => setCharacterName(event.target.value)}
          ></input>
          <button onClick={characterNameHandler}>Continue...</button>
        </>
      )}
    </div>
  )
}

export default Intro
