import React from 'react'
import { Redirect } from 'react-router-dom'

const Auth = () => {
  const id = localStorage.getItem('_ID')
  return (
    id ? <Redirect to="/dashboard" /> : <h2>Panel de connexion</h2>
  )
}

export default Auth
