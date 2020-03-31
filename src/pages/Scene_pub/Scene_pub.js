import React, { useState, useEffect } from 'react'
import classes from './Scene_pub.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import belchSound from '../../assets/sounds/belch.wav'
import swallowSound from '../../assets/sounds/swallow.mp3'
import pubAmbience from '../../assets/sounds/pub_ambience.mp3'

export const Scene_pub = () => {
  const dispatch = useDispatch()
  const characterName = useSelector(state => state.characterName)
  const inebriationLevelState = useSelector(state => state.inebriationLevel)
  const [resolveScreen, setResolveScreen] = useState(false)
  const [resolveScreenToggle, setResolveScreenToggle] = useState(false)
  const [resolveNext, setResolveNext] = useState(false)
  const [inebriationLevel, setinebriationLevel] = useState(0)
  const [dudeReplyToggler, setdudeReplyToggler] = useState(false)
  const [dudeReplyText, setDudeReplyText] = useState('')
  const [befriendDude, setBefriendDude] = useState(false)
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setResolveScreen(true)
  //   }, 1700)
  // }, [resolveScreenToggle])

  useEffect(() => {
    setTimeout(() => {
      setdudeReplyToggler(false)
    }, 1800)
    if (beerBottleEmpty) {
      setTimeout(() => {
        setHoverOnBeerObservation("Sigh, it's all empty now. You drank it.")
      }, 1700)
    }
    if (resolveScreenToggle) {
      setTimeout(() => {
        setResolveScreen(true)
        setResolveScreenToggle(false)
      }, 1700)
    }
    if (befriendDude) {
      setTimeout(() => {
        setHoverOnDudeObservation("He's your pal now. At least for tonight.")
      }, 1700)
    }
  }, [dudesPatienceCounter, beerBottleEmpty, resolveScreenToggle, befriendDude])

  // useEffect(() => {
  //   if (beerBottleEmpty) {
  //     setTimeout(() => {
  //       setHoverOnBeerObservation("Sigh, it's all empty now. You drank it.")
  //     }, 1700)
  //   }
  // }, [beerBottleEmpty])

  const toggleHoverOnDude = () => {
    setMouseHoverOnElementDude(!mouseHoverOnElementDude)
  }
  const toggleHoverOnBeer = () => {
    setMouseHoverOnElementBeer(!mouseHoverOnElementBeer)
  }

  const resolveScreenHandler = () => {
    setResolveScreen(!resolveScreen)
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
          "You're getting some angry vibes from this guy."
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
        if (inebriationLevelState.inebriationLevel > 0) {
          setBefriendDude(true)
        }
        setResolveScreenToggle(true)
        break
      case 5:
        setdudeReplyToggler(true)
        setDudeReplyText('Have one on me buddy! Sorry about earlier...')
        dispatch({
          type: 'INEBRIATION_LEVEL',
          inebriationLevel
        })
        setinebriationLevel(+1)
        swallow.play()
        break
      case 6:
        setdudeReplyToggler(true)
        setDudeReplyText("You're... you're a really cool guy.. *hic*")
        belch.play()
        break
      case 7:
        setdudeReplyToggler(true)
        setDudeReplyText('I... I love you... You know?')
        belch.play()
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
        // ambience.play()
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
      {resolveScreen && (
        <div className={classes.resolvescreen}>
          {!befriendDude && !resolveNext && (
            <>
              <p>You have been called out to step outside, which you do...</p>
              <button onClick={setResolveNext}>Uh-huh...</button>
            </>
          )}
          {!befriendDude && resolveNext && (
            <>
              <p>
                &nbsp;&nbsp;&nbsp;Unfortunately {characterName.characterName},
                you are too sober and nervous to calm this guy down, and
                promptly, before you even consider throwing a punch, you get
                your ass kicked. Disheartened you decide to go home. With a
                black eye and your thirst unquenched...
              </p>
              <Link className={classes.link} to='/Game_over'>
                Crap
              </Link>
            </>
          )}
          {befriendDude && !resolveNext && (
            <>
              <p>You have been called out to step outside, which you do...</p>
              <button onClick={setResolveNext}>Uh-huh...</button>
            </>
          )}
          {befriendDude && resolveNext && (
            <>
              <p>
                &nbsp;&nbsp;&nbsp;The guy seems really pissed off at first, but
                you have some beer in you too, and that makes you calm and
                confident. You start chatting, and soon you are both laughing
                and pretending to throw punches at each other. After realizing
                that you both are not so different, you return to the pub. You
                seem to have acquired a new best friend for this evening.
              </p>
              <button onClick={resolveScreenHandler}>Return to the pub</button>
            </>
          )}
        </div>
      )}
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
