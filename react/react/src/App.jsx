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
import LoginForm from './component/FormValidation/LoginForm'
import ContactForm from './component/FormValidation/ContactForm'
import Todo from './pages/Todo'

import SimpleTodo from './component/Lists/SimpleTodo'
import CountMemoCompSlow from './component/useMemo/calculationSlow'
// import CountMemoCompFast from './component/useMemo/calculationFast'
import Box from './UseLayOut/Box'
import BoxHeight from './UseLayOut/BoxHeight'



function App() {
  

  return (
    <>
     {/* Hello
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
     <LoginForm/>
     <ContactForm/>
     {/* <Greeting/> */}

     {/* <Todo/> 
  
     <SimpleTodo/>
     <CountMemoCompSlow/>
     <CountMemoCompFast/> */}
     {/* <Box/> */}
     <BoxHeight/>
    </>
    
  )
}

export default App
