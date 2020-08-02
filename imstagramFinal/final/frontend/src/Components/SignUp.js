import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {apiUrl} from '../Utils/apiURL'
import { useInput } from "../Utils/Input";
import Upload from "./Upload";
import Dropzone from '../Components/Dropzone'
const SignUpPage = () => {
  const name = useInput('')
  const email = useInput("")
  const [pic, setPic] = useState("https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg")
  const [error, setError] = useState(null);
  const API = apiUrl()
  const history = useHistory();

  
 const handleSubmit = async(e)=>{
   e.preventDefault()
   try {
     let newSignUp = await signUp(users_name.value, email.value);
     let response = await axios.post(`${API}/users`,{
       id: newSignUp.users_name.uid,
       users_name: name.value,
       email: email,
       user_pic: pic
     })
   } catch (error) {
     console.lot(error)

     
   }
   history.push('/users')
 }
 const handleImageChange = (imageFile) => {
  if(imageFile[0]){
    handleUpload(imageFile[0])
  }
}
 const handleUpload = (image) => {
  const uploadTask = storage.ref(`image/${image.name}`).put(image);
  uploadTask.on(
    "state_changed",
    snapshot => {},
    error => {
      console.log(error);
    },
    () => {
      storage
      .ref("image")
      .child(image.name)
      .getDownloadURL()
      .then(url => {
        setPic(url)
      })
    }
  )
}



console.log("image: ", uploadPic);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  onChange={(e) => setUserName(e.currentTarget.value)} type="text" placeholder="username" />
        <input  onChange={(e) => setEmail(e.currentTarget.value)} type="email" placeholder="email" />
        <input  onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder="password"/>
        <Dropzone handleImageChange={handleImageChange} dropzoneText={"Drop or Select Your Profile Image"}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
