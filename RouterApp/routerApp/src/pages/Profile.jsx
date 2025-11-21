import React from 'react'
import { useParams } from 'react-router'

function Profile() {

    const params = useParams()
  return (
    <div>
        <h2>Hay , I'm User {params.username}</h2>
    </div>
  )
}

export default Profile