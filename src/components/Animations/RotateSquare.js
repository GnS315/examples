import React, {useEffect, useRef, useState} from 'react'

const RotateSquare = () => {
  const squareRef = useRef(null)
  const [animation, setAnimation] = useState(null)

  useEffect(() => {
    if (squareRef.current) {
      const newAnimation = squareRef.current.animate([
          {transform: 'rotate(0deg)', backgroundColor: 'rgb(255, 123, 128)'},
          {backgroundColor: 'rgba(255, 123, 128, 0.5)', offset: 0.33},
          {transform: 'rotate(180deg)', backgroundColor: 'rgba(255, 123, 128)'}
        ],
        {
          duration: 1000,
          iterations: Infinity
        }
      )

      setAnimation(newAnimation)
    }
  }, [])


  const startClickHandler = () => {
    if (animation) {
      animation.play()
    }
  }
  const stopClickHandler = () => {
    if (animation) {
      animation.pause()
    }
  }

  const fasterClickHandler = () => {
    if (animation) {
      animation.playbackRate *= 1.5
      if (animation.playbackRate > 20) {
        alert('Не гоняй')
        animation.playbackRate = 1
      }
    }
  }

  const slowerClickHandler = () => {
    if (animation) {
      animation.playbackRate *= 0.7
    }
  }

  return (
    <div>
      <div style={{width: 100, height: 100}} ref={squareRef} />
      <div style={{paddingTop: 40, display: 'flex', gap: 10}}>
        <button onClick={startClickHandler}>{'Старт'}</button>
        <button onClick={stopClickHandler}>{'Стоп'}</button>
        <button onClick={fasterClickHandler}>{'Быстрее'}</button>
        <button onClick={slowerClickHandler}>{'Медленнее'}</button>
      </div>
    </div>
  )
}

export default RotateSquare