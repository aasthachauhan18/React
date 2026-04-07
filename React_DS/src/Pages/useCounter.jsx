import React, { useState } from 'react'

function useCounter() {
    const [count,setCount] = useState(0);

    function Incre() {
      setCount(count+1)
    }
    function Decre() {
        setCount(count-1)
    }
  return [Incre,Decre,count]
}

export default useCounter