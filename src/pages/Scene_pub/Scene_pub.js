import React, { useState, useEffect } from 'react'
import classes from './Scene_pub.module.css'
import { useDispatch, useSelector } from 'react-redux'

import belchSound from '../../assets/sounds/belch.wav'
import swallowSound from '../../assets/sounds/swallow.mp3'
import pubAmbience from '../../assets/sounds/pub_ambience.mp3'

export const Scene_pub = () => {
  const dispatch = useDispatch()
  const characterName = useSelector(state => state.characterName)
  const inebriationLevelState = useSelector(state => state.inebriationLevel)
  const [inebriationLevel, setinebriationLevel] = useState(0)
  const [dudeReplyToggler, setdudeReplyToggler] = useState(false)
  const [dudeReplyText, setDudeReplyText] = useState('')
  const [hoverOnBeerObservation, setHoverOnBeerObservation] = useState(
    'Somebody left this beer unattended? And the bottle is almost full too...'
  )
  const [hoverOnDudeObservation, setHoverOnDudeObservation] = useState(
    'This guy seems to be really into his beer.'
  )
  const [
    beerBottleInteractionsCounter,
    setBeerBottleInteractionsCounter
  ] = useState(0)
  const [dudesPatienceCounter, setDudesPatienceCounter] = useState(0)
  const [beerBottleEmpty, setBeerBottleEmpty] = useState(false)
  const [mouseHoverOnElementDude, setMouseHoverOnElementDude] = useState(false)
  const [mouseHoverOnElementBeer, setMouseHoverOnElementBeer] = useState(false)
  const belch = new Audio(belchSound)
  const swallow = new Audio(swallowSound)
  const ambience = new Audio(pubAmbience)
  // TODO: figure out how to stop ambience loop on rout change
  // TODO: remove ambience from starting when clicking on beer bottle [testing reasons] and create a special button for toggling it ON/OFF
  // MEMO: code below works, ambience looping ok.
  // ambience.addEventListener('timeupdate', () => {
  //   if (ambience.currentTime > ambience.duration - 2) {
  //     ambience.currentTime = 0.1
  //     ambience.play()
  //   }
  // })

  useEffect(() => {
    setTimeout(() => {
      setdudeReplyToggler(false)
    }, 1700)
  }, [dudesPatienceCounter])

  useEffect(() => {
    if (beerBottleEmpty) {
      setTimeout(() => {
        setHoverOnBeerObservation("Sigh, it's all empty now. You drank it.")
      }, 1700)
    }
  }, [beerBottleEmpty])

  const toggleHoverOnDude = () => {
    setMouseHoverOnElementDude(!mouseHoverOnElementDude)
  }
  const toggleHoverOnBeer = () => {
    setMouseHoverOnElementBeer(!mouseHoverOnElementBeer)
  }

  const pokeDudeHandler = () => {
    setDudesPatienceCounter(dudesPatienceCounter + 1)
    switch (dudesPatienceCounter + 1) {
      case 1:
        setdudeReplyToggler(true)
        belch.play()
        setDudeReplyText(`Get lost, ${characterName.characterName}...`)
        setHoverOnDudeObservation(
          'He seems to be annoyed by your attempts to socialize.'
        )
        break
      case 2:
        setdudeReplyToggler(true)
        setDudeReplyText('Seriously, piss off mate.')
        setHoverOnDudeObservation(
          "You're getting an angry vibes from this guy."
        )
        break
      case 3:
        setdudeReplyToggler(true)
        setDudeReplyText("You are really asking for it, aren't ya?")
        setHoverOnDudeObservation(
          "You wonder whether it's smart to provoke him any further."
        )
        break
      case 4:
        setdudeReplyToggler(true)
        setDudeReplyText("THAT'S IT! YOU AND ME! OUTSIDE! NOW!")
        setHoverOnDudeObservation("Now you've done it...")
        break
      default:
        break
    }
  }

  const pokeBeerHandler = () => {
    setBeerBottleInteractionsCounter(beerBottleInteractionsCounter + 1)
    switch (beerBottleInteractionsCounter + 1) {
      case 1:
        dispatch({
          type: 'INEBRIATION_LEVEL',
          inebriationLevel
        })
        setinebriationLevel(+1)
        setBeerBottleEmpty(true)
        setHoverOnBeerObservation('While nobody sees it... Bottoms up!')
        swallow.play()
        ambience.play()
        break
      case 2:
        setHoverOnBeerObservation("Sigh, it's all empty now. You drank it.")
        break
      default:
        break
    }
  }

  return (
    <div className={classes.playArea}>
      <div className={classes.pubspace}>
        <div className={classes.inebriationbox}>
          Inebriation Level: {inebriationLevelState.inebriationLevel}
        </div>
        <div
          className={classes.beerbottle}
          onMouseEnter={toggleHoverOnBeer}
          onMouseLeave={toggleHoverOnBeer}
          onClick={pokeBeerHandler}
        ></div>
        <div
          className={classes.drinkingdude}
          onMouseEnter={toggleHoverOnDude}
          onMouseLeave={toggleHoverOnDude}
          onClick={pokeDudeHandler}
        ></div>
        {dudeReplyToggler && (
          <div className={classes.drinkingduderesponse}>{dudeReplyText}</div>
        )}
      </div>
      <div className={classes.dialogueArea}>
        {mouseHoverOnElementDude && <p>{hoverOnDudeObservation}</p>}
        {mouseHoverOnElementBeer && <p>{hoverOnBeerObservation}</p>}
      </div>
    </div>
  )
}

export default Scene_pub
