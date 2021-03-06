// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { AContext } from "../../Providers/Context";
// import { apiURL } from "../../Utils/apiURL";
// import NewComments from "../Comments/NewComments";
// import { makeStyles } from "@material-ui/core/styles";
// //component displays comments made on posts by users that are created 
// //grab context from current user to post to comment
// //saving comment to state
// //render comments from state
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

// const ShowContent = ({ post_id }) => {
//   const API = apiURL();
//   const { currentUsers, token, loading } = useContext(AContext);
//   const [comments, setComments] = useState([]);
//   const [content, setContent] = useState("");
//   const [user, setUser] = useState([]);

//   const allComments = async () => {
//     try {
//       let res = await axios({
//         method: "get",
//         url: `${API}/comments`,
//         headers: {
//           AuthToken: token,
//         },
//       });
 
//       setComments(res.data.comments);
      
//       setUser(res.data.comments[0].user_id)
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     allComments();
//   }, [API, token]);

 
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



//   const showAll = comments.map((comment) => {
//     return (
//       <ul className="commentList">
//         <li>
//           {comment.user_id}
          

//            {comment.content}
           

//         </li>
//       </ul>
//     );
//   });

//   return (
//     <div className="allComments">
//       <div className="pastComments">{showAll}</div>
//       <div className="addComments">
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
//       </div>
//     </div>
//   );
// };
// export default ShowContent;
