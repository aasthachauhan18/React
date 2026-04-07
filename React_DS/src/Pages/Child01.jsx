import React from 'react'

function Child01(props) {
  return (
    <div>
        <input type="text" placeholder='Enter your name'
        onChange={(e)=>props.name(e.target.value)}/>
        {/* <p>{}</p> */}
        
    </div>
  )
}

export default Child01