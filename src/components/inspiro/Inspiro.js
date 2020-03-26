import React, { useState } from 'react'
import './Inspiro.css'

export const Inspiro = () => {
  const [picture, setPicture] = useState('')
  const fetchPictureHandler = async () => {
    const response = await fetch('https://inspirobot.me/api?generate=true')
    const fetchedPicture = await response.text()
    setPicture(fetchedPicture)
  }

  return (
    <div>
      <button onClick={fetchPictureHandler}>press for inspiration</button>
      <img src={picture} alt='' />
    </div>
  )
}
