import React, { useState } from "react";
import Error from "./Error";
import { useInput } from "../Util/Hooks";
import axios from "axios";
import "../CSS/SignUpPage.css";
import Input from "./Input";

const SignUp = ({ onLogin }) => {
//   const users_name = useInput("");
//   const email = useInput("");
// //   const full_name = useInput("");
//   const profile_pic = useState("");

//   const [image, setImage] = useState(null);

//   const [error, setError] = useState("");

//   const handleUpload = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("image", image);
//       const config = {
//         headers: {
//           "content-type": "multipart/form-data",
//         },
//       };
//       let res = await axios.post(
//         "http://localhost:4001/upload",
//         formData,
//         config
//       );
//       let imageUrl = res.data.imageUrl;
//       let newUser = await axios.post("http://localhost:4001/users", {
//         email: email.value,
//         full_name: full_name.value,
//         username: username.value,
//         age: age.value,
//         profile_pic: imageUrl,
//       });

//       if (newUser) {
//         sessionStorage.setItem("username", username.value);
//         sessionStorage.setItem("id", newUser.data.payload.id);

//         onLogin();
//       }
//     } catch (error) {
//       setError("Invalid Input: Username and/or Email Exists");
//     }
//   };

//   return (
//     <>
//       <div className="signUpFormContainer">
//         <form className="signUpForm" onSubmit={handleSubmit}>
//           <div className="inputContainer">
//             <Input
//               className="input"
//               type={"text"}
//               name={"username"}
//               placeholder={"Pick a Username"}
//               input={username}
//             />
//           </div>

//           <div className="inputContainer">
//             <Input
//               className="input"
//               type={"text"}
//               name={"email"}
//               placeholder={"Email"}
//               input={email}
//             />
//           </div>

//           <div className="inputContainer">
//             <Input
//               className="input"
//               type={"text"}
//               name={"full_name"}
//               placeholder={"Full Name"}
//               input={full_name}
//             />
//           </div>

     

//           <div className="uploadImage">
//             <label>
//               {" "}
//               Upload Profile Pic:
//               <input
//                 className="uploadImage"
//                 type={"file"}
//                 name={"profilePic"}
//                 onChange={(event) => handleUpload(event)}
//               />
//             </label>
//           </div>

//           <button className="signUpButton" type="submit">
//             Login
//           </button>
//         </form>

//         <div>{!error ? <Error message={error} /> : null}</div>
//       </div>
//     </>
//   );
};
export default SignUp;
