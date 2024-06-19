import React, { useState, useLayoutEffect } from 'react'

const MainPage = ({ user }) => {
  const [userData, setUserData] = useState({ name: '', lastname: '' })
  useLayoutEffect(() => {
    setUserData(user)
  }, [user])
  return (
    <div>
      <h1>Добро пожаловать {userData.name} {userData.lastname}, мы тебя ждали</h1>
    </div>
  )
}

export default MainPage