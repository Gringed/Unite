import React from 'react'

const Auth = () => {
  const id = localStorage.getItem('_ID')
  return (
    id ? document.location = ('./dashboard') : <h2>Panel de connexion</h2>
  )
}

export default Auth
