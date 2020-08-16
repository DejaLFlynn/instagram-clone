import React, { useState, useEffect } from "react";
import {apiURL} from '../Utils/apiURL'

const Likes=({post_id})=>{
    const [likes, setLikes] = useState([]);

    const getLikes = async () => {
        try {
          const res = await getLikeCommentByPostId(post_id);
          debugger
          if (res) {
            setLikes(res.length);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getLikes()
      }, []);
    
    return(
        <div>


        </div>
    )

}

export default Likes;