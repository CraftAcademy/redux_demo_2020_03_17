import React, { useEffect} from 'react'
import { useSelector, connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayMessage = (props) => {

	const message = useSelector(state => state.greetings.message)
	// useEffect(()=>{
	// 	console.log(`message was updated to ${message}`)
	// },[message])
	// useEffect(()=>{
	// 	console.log(`We mounted the component`)
	// },[])

	// toast.info(props.message)
	toast.info(message)
	return <ToastContainer />
}
// const mapStateToProps = state => {
// 	return {
// 		message: state.greetings.message
// 	}
// }
// export default connect(mapStateToProps)(DisplayMessage)
export default DisplayMessage