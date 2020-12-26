import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../Utils/apiURL";
import { AContext } from "../Providers/Context";
import { useParams, useHistory } from "react-router-dom";
const Search = () => {
  const [posts, setPosts] = useState([]);
  const { currentUser, token } = useContext(AContext);
  const { hashtag } = useParams();
  const API = apiURL();

  const searchHashtag = async () => {
    try {
      let res = await axios({
        method: "GET",
        url: `${API}/api/${hashtag}`,
        headers: {
          AuthToken: token,
        },
      });
      setPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchHashtag();
  }, [API, token, hashtag, currentUser]);
  return (
    <div className="Search">
      <p>{posts}</p>
    </div>
  );
};
export default Search;
