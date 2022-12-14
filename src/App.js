import React from 'react'
import Button from './components/button'

function App() {
    const displayText = () =>{
        console.log( "Hi Oreo")
    }

  return (
    <div>
    <Button action={displayText}/>
    </div>
  )
}

export default App