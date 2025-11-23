import React from 'react'
import { Link, Outlet } from 'react-router'

function Foundation() {
  return (
    <>
        <h2>Learning React Foundation</h2> 

      <div>
          <ol>
          <li><Link className="text-black text-decoration-none" to="foundation">Introduction</Link></li>
          <li><Link className="text-black text-decoration-none" to="foundation">JSX </Link></li>
          <li><Link className="text-black text-decoration-none" to="foundation">Components</Link></li>
          <li><Link className="text-black text-decoration-none" to="foundation">Props</Link></li>
          <li><Link className="text-black text-decoration-none" to="foundation">State</Link></li>
          <li><Link className="text-black text-decoration-none" to="foundation">Event Handling</Link></li>
          <li><Link className="text-black text-decoration-none" to="foundation">Conditional Rendering</Link></li>
          <li><Link className="text-black text-decoration-none" to="foundation">List And Keys</Link></li>
          <li><Link className="text-black text-decoration-none" to="foundation">Forms</Link></li>
          <li><Link className="text-black text-decoration-none" to="foundation">Styling</Link></li>
        </ol> 
      </div>
        <div className="text-center">
 <Outlet/>
      </div>
    </>
    
  )
}

export default Foundation