import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {apiURL} from '../Utils/apiURL'
import {signUp} from '../Utils/Firebase'
import {AContext} from '../Providers/Context';
// import Dropzone from '../Components/Dropzone'
//explain component

const SignUpPage = () => {
  const[email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] =useState('')
  const { token} = useContext(AContext)
  // const { currentUsers, token, loading } = useContext(AContext);
  // const [pic, setPic] = useState("https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg")
  // const [error, setError] = useState(null);
  const API = apiURL()
  const history = useHistory();

  
 const handleSubmit = async(e)=>{
   e.preventDefault()
   try {
     let res = await signUp(email, password);
     debugger
     let res2 = await axios({
       method: "post",
       url: `${API}/users/${res2.user.uid}`,
       data: {id: res.user.uid, email, name},
       headers: {
         AuthToken: token
       }
     })
     
     
    //  await axios.post(`${API}/users`,{
    //    id:res.user.uid, email})
       debugger
       console.log(res2.data)
       history.push('/posts')
   } catch (error) {
    //  setError(error.message)

    console.log(error);
     
   }
 
 }
//  const handleImageChange = (imageFile) => {
//   if(imageFile[0]){
//     handleUpload(imageFile[0])
//   }
// }
//  const handleUpload = (image) => {
//   const uploadTask = storage.ref(`image/${image.name}`).put(image);
//   uploadTask.on(
//     "state_changed",
//     snapshot => {},
//     error => {
//       console.log(error);
//     },
//     () => {
//       storage
//       .ref("image")
//       .child(image.name)
//       .getDownloadURL()
//       .then(url => {
//         setPic(url)
//       })
//     }
//   )
//}



// console.log("image: ", uploadPic);

  return (
    <>
    <div>
      {/* {error ? <div>{error}</div> : null} */}
      <form onSubmit={handleSubmit}>

        <input value={name} onChange={(e)=> setName(e.currentTarget.value)} type="text" placeholder="name" />
        <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="text" placeholder="email" />
        <input value={password} onChange={(e) => setPassword(e.currentTarget.value)} autoComplete="on" type="password" placeholder="password"/>
        {/* <Dropzone handleImageChange={handleImageChange} dropzoneText={"Drop or Select Your Profile Image"}/> */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
};

export default SignUpPage;