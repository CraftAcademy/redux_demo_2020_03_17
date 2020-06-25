import React from 'react'
import { useDispatch } from 'react-redux'

const Button = () => {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => dispatch({ type: "CHANGE_GREETING", payload: "WHATEVER MESSAGE!!!" })}
    >Change greeting</button>
  )
}

export default Button