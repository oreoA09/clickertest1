import React from 'react'

function Button(props) {

  return (
    <div>
        <button onClick={props.action}>Show/Hide</button>
    </div>
  )
}

export default Button