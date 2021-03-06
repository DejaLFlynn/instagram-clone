// import React, { useState, useContext, useEffect } from "react";
// import { Component } from "react";
// import axios from "axios";
// import { AContext } from "../../Providers/Context";
// import { apiURL } from "../../Utils/apiURL";
// import Divider from "@material-ui/core/Divider";

// import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import IconButton from "@material-ui/core/IconButton";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: "2px 4px",
//     display: "flex",
//     alignItems: "center",
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//     fontFamily: "inherit",
//     fontSize: "initial",
//   },
//   iconButton: {
//     padding: 10,
//   },
// }));

// const NewComments = ({ post_id }) => {
//   const classes = useStyles();
//   const API = apiURL();
//   const { currentUsers } = useContext(AContext);

//   const [comments, setComments] = useState([]);
//   const [content, setContent] = useState("");
 

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const dataObj = {
//       user_id: currentUsers.id,
//       post_id: post_id,
//       content: content,
//     };

//     try {
//       const res = await axios.post(API + `/comments`, dataObj);
//       debugger;
//       setContent(res.data.payload.content);
//       // console.log(res.data)
//       // setComments(res.data.payload.content)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           className="comment_input"
//           type="text"
//           placeholder="Add a comment..."
//           onChange={(e) => setContent(e.target.value)}
//           value={content}
//           autoComplete="on"
//         />
//         <input
//           className="comment"
//           type="button"
//           value="Post"
//           onClick={handleSubmit}
//           disabled={content ? false : true}
//         />
//       </form>
	
//     </div>
//   );
// };

// export default NewComments;
