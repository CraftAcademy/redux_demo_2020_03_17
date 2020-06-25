import React from 'react'
import { ActionCable } from 'actioncable-client-react'

const Notifications = () => {

  const incomingMessage = (message) => {
    debugger
  }
  return (
    <ActionCable
      channel={'WebNotificationsChannel'}
      onReceived={incomingMessage}>

    </ActionCable>
  )
}

export default Notifications
