import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Posts =()=>{
const [explorePosts, setExplorePosts] = useState([]);

const getPosts = async ()=>{
const posts = `http://localhost:4001/posts`;
try {
    let response = await axios.get(posts)
    debugger
    setExplorePosts(response.data.payload)
} catch (error) {
    setExplorePosts([])
}

}
useEffect(() => {
    getPosts();
  }, []);


//   const handleLikes = async (id) => {
//     try {
//       await axios.post(`http://localhost:4001/posts`, {
//         users_id: sessionStorage.getItem('id'),
//         posts_id: id
//       })
//       explorePics();
//     } catch (err) {
//       setExplorePics([])
//     }
//   }
//   let displayExplorerPics = explorePics.map(post=>{
// return(
//     <div className="explorerPicContainer" ></div>
// )

//   })
  return(
      <div className ="Posts">
          <div className="explorerPics"></div>
      </div>
  )


}

export default Posts;