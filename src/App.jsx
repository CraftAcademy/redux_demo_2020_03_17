import React, { useState } from 'react'
import Button from './Button'
import Location from './Location'
import Notifications from './Notifications'
import { useSelector } from 'react-redux'
import { ActionCableProvider } from "actioncable-client-react";


const App = () => {
  const [name, setName] = useState('Thomas')
  const greeting = useSelector(state => state.greeting)

  return (
    <ActionCableProvider url="ws://localhost:3000/cable">
      <h1>{greeting} {name}</h1>
      <Location />
      <Button />
      <Notifications />
    </ActionCableProvider>
  )
}

export default App
