import React from 'react'

function childComponent(props) {
  return (
    <div><button onClick={()=>props.greetHandler('child')}>Greet</button></div>
  )
}

export default childComponent