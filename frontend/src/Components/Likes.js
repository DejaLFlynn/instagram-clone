import React, { useState, useEffect, useContext } from "react";
import { apiURL } from "../Utils/apiURL";
import axios from "axios";
import { AContext } from "../Providers/Context";

const Likes = () => {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const API = apiURL();
  const {currentUser, token} = useContext(AContext);

  const getLikes = async () => {
    try {
      const res = await axios.get(`${API}/likes`);
      // debugger;
      if (res) {
        setLikes(res.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLikes();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // let dataObj = {
    //   user_id,
    //   post_id: post_id,
    // };
    // try {
    //   const res = addLike(dataObj);
    //   if (res) {
    //     getLikes();
    //   }
    // } catch (error) {
    //   console.log(error, "like error");
    // }
  };
  const likeDisplay = async (event) => {
    if (event.target.innerText === "Like") {
      event.target.innerText = "Unlike";
      try {
        const res = await getLikes();
        debugger;
        getLikes();
      } catch (error) {
        console.log(error);
      }
    } else {
      event.target.innerText = "Like";
    }
  };
  const likeArray = (arr) => {
    // return arr.every((liked) => {
    //   debugger;
    //   return liked.length;
    // });
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <>
      <div>
        <form onclick={handleSubmit}>
          {likeArray ? (
            likeArray(likeArray) ? (
              <button onClick={likeDisplay}>Unlike</button>
            ) : (
              <button onClick={likeDisplay}>Like</button>
            )
          ) : (
            <p> 0 </p>
          )}
          <p>{likes}</p>
        </form>
      </div>
    </>
  );
};

export default Likes;
