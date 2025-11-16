import React from 'react'
import Navbar from './pages/Navbar'
import Button from './component/Events/Button'
import Input from './component/Events/Input'
import Userlist from './component/Events/Userlist'
import FormData from './component/Events/FormData'
import Like from './component/States/Like'
import Isvisible from './component/States/Isvisible'
import Color from './component/States/Color'
import Counters from './component/States/Counter'
import Login from './component/ConditionalRender/Login'
import Display from './component/ConditionalRender/Display'
import Component from './component/ConditionalRender/Component'
import Greeting from './component/ConditionalRender/Greeting'
import Name from './component/Lists/Name'
import Unique from './component/Lists/Unique'




function App() {
  

  return (
    <>
     Hello
     <Navbar/>
     <Button/>
     <Input/>
     <Userlist/>
     <FormData/>
     <br />
     <Like/>
     <br />
     <Isvisible/>
     <br />
     <Color/>
     <Counters/>
     <Login/>
     <Display/>
     <Component/>
     <Name/>
     <Unique/>
     {/* <Greeting/> */}
  
    </>
  )
}

export default App
