import React, { useState } from 'react'
import classes from './Scene_pub.module.css'
import { useSelector } from 'react-redux'
import belchSound from '../../assets/sounds/belch.wav'

export const Scene_pub = () => {
  const characterName = useSelector(state => state.characterName)
  const [dudeReply, setDudeReply] = useState(false)
  const belch = new Audio(belchSound)

  const pokeDudeHandler = () => {
    setDudeReply(!dudeReply)
    belch.play()
  }

  // const playBelch = () => {
  //   belch.play()
  // }

  return (
    <div className={classes.playArea}>
      <div className={classes.pubspace}>
        <div className={classes.drinkingdude} onClick={pokeDudeHandler}></div>
        {dudeReply && (
          <div className={classes.drinkingduderesponse}>
            Get lost, {characterName}...
          </div>
        )}
      </div>
      <div className={classes.dialogueArea}>
        <p>-nothing here yet-</p>
      </div>
    </div>
  )
}

export default Scene_pub
