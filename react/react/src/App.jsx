import React from 'react'
import Navbar from './pages/Navbar'
import Button from './component/Events/Button'
import Input from './component/Events/Input'
import Userlist from './component/Events/Userlist'
import FormData from './component/Events/FormData'
import Like from './component/Events/States/Like'
import Isvisible from './component/Events/States/Isvisible'
import Color from './component/Events/States/Color'
import Counters from './component/Events/States/Counter'
import Login from './component/ConditionalRender/Login'
import Display from './component/ConditionalRender/Display'
import Component from './component/ConditionalRender/Component'
import DynamicGreeting from './component/ConditionalRender/Greeting'




function App() {
  

  return (
    <>
     Hello
     <Navbar/>
     {/* <Button/> */}
     {/* <Input/> */}
     {/* <Userlist/> */}
     {/* <FormData/> */}
     <br />
     {/* <Like/> */}
     <br />
     {/* <Isvisible/> */}
     <br />
     {/* <Color/> */}
     {/* <Counters/> */}
     {/* <Login/> */}
     {/* <Display/> */}
     {/* <Component/> */}
     <DynamicGreeting/>
  
    </>
  )
}

export default App
