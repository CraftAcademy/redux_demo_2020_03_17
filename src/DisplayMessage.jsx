import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayMessage = () => {

	const message = useSelector(state => state.greetings.message)
	useEffect(()=>{
		console.log(`message wass updated to ${message}`)
	},[message])
	useEffect(()=>{
		console.log(`We mounted the component`)
	},[message])

	toast.info(message)
	return <ToastContainer />
}

export default DisplayMessage
