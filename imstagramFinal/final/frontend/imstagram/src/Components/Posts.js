import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Posts =()=>{
const [explorePics, setExplorePics] = useState([]);

const getUserPics = async ()=>{
const userPics = `http://localhost:4001/posts`;
try {
    let response = await axios.get(userPics)
    setExplorePics(response.data.payload)
} catch (error) {
    setExplorePics([])
}

}
useEffect(() => {
    getUserPics();
  }, []);

  const handleLikes = async (id) => {
    try {
      await axios.post(`http://localhost:4001/posts`, {
        users_id: sessionStorage.getItem('id'),
        posts_id: id
      })
      explorePics();
    } catch (err) {
      setExplorePics([])
    }
  }
  let displayExplorerPics = explorePics.map(post=>{
return(
    <div className="explorerPicContainer" key={post.id + post.posts_image} onClick={()=>handleLikes(post.id)}></div>
)

  })
  return(
      <div className ="Posts">
          <div className="explorerPics">{displayExplorerPics}</div>
      </div>
  )


}

export default Posts;