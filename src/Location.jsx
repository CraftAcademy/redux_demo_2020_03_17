import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAddress from './modules/openCageService'

const Location = () => {
  const dispatch = useDispatch()
  const city = useSelector(state => state.position.city)
  useEffect(() => {
    let coords
    navigator.geolocation.getCurrentPosition(position => {
      coords = position.coords
      getAddress(coords).then((address) => {
        const { latitude, longitude } = coords
        let fullPosition = { latitude: latitude, longitude: longitude, city: (address.components.city || address.components.village) }
        dispatch({ type: "SET_POSITION", payload: fullPosition })
      })
    })
  }, [])
  return (
    <>
      {city &&
        <h1>You are in {city}!</h1>
      }
    </>

  )
}

export default Location
