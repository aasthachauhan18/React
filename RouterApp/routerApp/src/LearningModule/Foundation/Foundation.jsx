import React from 'react'
import { Link, Outlet } from 'react-router'

function Foundation() {
  return (
    <>
        <h2>Learning React Foundation</h2> 

      <div>
          <ol>
          <li><Link className="text-black text-decoration-none" to="Intro">Introduction</Link></li>
          <li><Link className="text-black text-decoration-none" to="jsx">JSX </Link></li>
          <li><Link className="text-black text-decoration-none" to="compo">Components</Link></li>
          <li><Link className="text-black text-decoration-none" to="props">Props</Link></li>
          <li><Link className="text-black text-decoration-none" to="state">State</Link></li>
          <li><Link className="text-black text-decoration-none" to="event">Event Handling</Link></li>
          <li><Link className="text-black text-decoration-none" to="condition">Conditional Rendering</Link></li>
          <li><Link className="text-black text-decoration-none" to="list">List And Keys</Link></li>
          <li><Link className="text-black text-decoration-none" to="form">Forms</Link></li>
          <li><Link className="text-black text-decoration-none" to="style">Styling</Link></li>
        </ol> 
      </div>
        <div className="text-center">
 <Outlet/>
      </div>
    </>
    
  )
}

export default Foundation