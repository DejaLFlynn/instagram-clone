import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../Utils/apiURL";
import { AContext } from "../Providers/Context";
import "../CSS/Explorer.css";
import Avatar from "@material-ui/core/Avatar";

import IconButton from "@material-ui/core/IconButton";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import NewLike from "./NewLike";

import { red } from "@material-ui/core/colors";
import { CardHeader } from "@material-ui/core";

import NewComments from "./Comments/NewComments";
import Comments from "./Comments/Comments";
//component displays posts, image, caption and date created from database
//grab contexts from all post
//comments can be made for posts
//likes can be made for post
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
    position: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Explorer = () => {
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [posts, setPosts] = useState([]);
  const [pic, setPic] = useState([]);
  const [userPic, setUserPic] = useState([]);
  const [postContent, setPostContent] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const API = apiURL();
  const { currentUsers, token } = useContext(AContext);
  const [userName, setUserName] = useState("");
  const classes = useStyles();
  const [content, setContent] = useState([]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const fetchPosts = async () => {
    try {
      let res = await axios.get(`${API}/posts`);

      setPosts(res.data.posts);
      setPic(res.data.pic);
      setPostContent(res.data.content);
      setUserPic(res.data.user_pic);
      fetchComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchComments = async () => {
    try {
      let res = await axios.get(`${API}/comments`);
      //  debugger
      setContent(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const showHomePosts = posts.map((post) => {
    //  debugger
    return (
      <div>
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar src={post.user_pic}></Avatar>}
            action={<IconButton aria-label="settings"></IconButton>}
            title={userName}
          />
          <CardMedia
            className={classes.media}
            image={post.posts_images}
            title="userPics"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.content}
              {content}
            </Typography>
          </CardContent>
          <CardContent>
            <NewLike />
          </CardContent>
          <CardContent>
            <Comments post_id={post.id} user_id={post.user_id} />
          </CardContent>
        </Card>
      </div>
    );
  });

  return (
    <div className="Explorer">
      <div>
        <IconButton></IconButton>

        <div>{showHomePosts}</div>
      </div>
    </div>
  );
};
export default Explorer;
// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { apiURL } from "../Utils/apiURL";
// import { AContext } from "../Providers/Context";
// import "../CSS/Explorer.css";
// import Avatar from "@material-ui/core/Avatar";

// import IconButton from "@material-ui/core/IconButton";

// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";

// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";

// import NewLike from "./NewLike";

// import { red } from "@material-ui/core/colors";
// import { CardHeader } from "@material-ui/core";

// import NewComments from "./Comments/NewComments";
// import Comments from "./Comments/Comments";
// //component displays posts, image, caption and date created from database
// //grab contexts from all post
// //comments can be made for posts
// //likes can be made for post
// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 600,
//     position: "center",
//     marginLeft: 400,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%",
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// const Explorer = () => {
//   // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const [posts, setPosts] = useState([]);
//   const [pic, setPic] = useState([]);
//   const [userPic, setUserPic] = useState([]);
//   const [postContent, setPostContent] = useState([]);
//   const [expanded, setExpanded] = React.useState(false);
//   const API = apiURL();
//   const { currentUsers, token } = useContext(AContext);
//   const [userName, setUserName] = useState("");
//   const classes = useStyles();
//   const [content, setContent] = useState([]);
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   const fetchPosts = async () => {
//     try {
//       let res = await axios.get(`${API}/posts`);

//       setPosts(res.data.posts);
//       setPic(res.data.pic);
//       setPostContent(res.data.content);
//       setUserPic(res.data.user_pic);
//       fetchComments(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const fetchComments = async () => {
//     try {
//       let res = await axios.get(`${API}/comments`);
//       //  debugger
//       setContent(res.data.payload);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const showHomePosts = posts.map((post) => {
//     //  debugger
//     return (
//       <div>
//         <Card className={classes.root}>
//           <CardHeader
//             avatar={<Avatar src={post.user_pic}></Avatar>}
//             action={<IconButton aria-label="settings"></IconButton>}
//             title={userName}
//           />
//           <CardMedia
//             className={classes.media}
//             image={post.posts_images}
//             title="userPics"
//           />
//           <NewLike />
//           <CardContent>
//             <Typography
//               justify="left"
//               variant="body2"
//               color="textPrimary"
//               component="p"
//             >
//               {post.content}
//               {content}
//               <Comments post_id={post.id} user_id={post.user_id} />
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   });

//   return (
//     <div className="Explorer">
//       {showHomePosts}
//       <NewLike />
//     </div>
//   );
// };
// export default Explorer;
