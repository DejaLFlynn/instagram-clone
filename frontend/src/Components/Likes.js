import React, { useState, useEffect, useContext } from "react";
import { apiURL } from "../Utils/apiURL";
import axios from "axios";
import { AContext } from "../Providers/Context";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Likes = (post_id) => {

  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [unlike, setUnlike] = useState(false);
  const API = apiURL();
  const {currentUser, token} = useContext(AContext);
  const like_id= currentUser.id;

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
    let dataObj = {
      like_id,
      post_id: post_id,
    };
    try {
      const res = await axios.post(API + `/likes`, dataObj);
	
      if (res) {
        getLikes();
      }
    } catch (error) {
      console.log(error, "like error");
    }
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
    return arr.every((liked) => {
      debugger;
      return liked.length;
    });
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
              <IconButton  color="secondary"  onClick={likeDisplay}>
              <FavoriteIcon />
              </IconButton>
            ) : (
              <IconButton color="primary" onClick={likeDisplay}>
              <FavoriteIcon />
              </IconButton>
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
