import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useHistory} from 'react-router-dom'
import {login} from './../../Utils/Firebase'
import firebase from '../../Firebase'
import {useInput} from '../../Utils/Input'
import {apiURL} from '../../Utils/apiURL'
import SignUp from '../SignUp'
const API = apiURL()
const SignIn =()=> {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()
	console.log(email, password)

	const handleSubmit = async (e) =>{
		e.preventDefault()
		try {
			await login(email, password)
			history.push(`/posts`)
		} catch (error) {
			console.log(" incorrect path",error)
		}
	}
	return (
		<div className="SignIn">
			<form onSubmit={handleSubmit}>
			<input type ='text' className="email" value={email}placeholder="email"  onChange={(e) => setEmail(e.currentTarget.value)}></input>
			<input type='text' className="password" value={password}  placeholder="password"  onChange={(e) => setPassword(e.currentTarget.value)}></input>
			<input type="submit"></input>
				
			</form>
			<div>
		
			</div>
		</div>
	)


}

export default SignIn;

// const [currentUser, setCurrentUser] = useState("")
// const sessionUser = user =>{
//   if(user){
//     const {email, uid} = user
//     getFirebaseIdToken().then(token=>{
//       setCurrentUser({email, uid, token})
//     })
//   }else{
//     setCurrentUser(null)
//   }
// }
// useEffect( () => {
//   const authStateObserver = firebase.auth().onAuthStateChanged(sessionUser)
//   return authStateObserver
// }, []);

 