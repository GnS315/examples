import React from 'react'
import RotateSquare from "./RotateSquare";

const Animations = () => {
  return (
    <React.Fragment>
      <hr />
      <h1>{'Animations Api'}</h1>
      <div style={{width: 400, height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <RotateSquare />
      </div>
    </React.Fragment>
  )
}

export default Animations