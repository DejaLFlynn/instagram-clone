import React, { useState, useEffect, useContext } from "react";
import { AContext } from "../../Providers/Context";
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import Upload from "../Upload";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

// import { makeStyles } from "@material-ui/core/styles";

const UsersGallery = () => {
  const API = apiURL();
  const { currentUsers, token } = useContext(AContext);
  const [posts, setPosts] = useState([]);
  const fetchUserById = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `${API}/posts/${currentUsers.id}`,
        headers: {
          AuthToken: token,
        },
      });

      setPosts(res.data.payload);
     
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUserById();
  }, [token]);

  useEffect(() => {
    fetchUserById();
  }, [posts, token]);

  return (
  <div className="UsersGallery">


      Users Posts
  </div>
  )
};

export default UsersGallery;
