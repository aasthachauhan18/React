import React, { useState } from 'react'
import Child01 from './Child01'
import Child02 from './Child02'

function Parent() {
    const[input,setInput] = useState("")
  return (
   <>
    <div>Parent</div>
    <Child01 name={setInput}/>
    <Child02 user={input}/>
   </>
  )
}

export default Parent