import React from 'react'
import useCounter from './useCounter'

function CustomHook() {
    const [Incre,Decre,count] = useCounter(0)
  return (
    <>
    <button onClick={Incre}>+</button>
    <h2>{count}</h2>
    <button onClick={Decre}>+</button>
    </>
  )
}

export default CustomHook