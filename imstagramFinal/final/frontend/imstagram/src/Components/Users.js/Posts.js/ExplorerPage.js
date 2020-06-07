import React, { useState, useEffect } from "react";
import Image from "./Image";
import axios from "axios";
import "../../../CSS/Explore.Css";

const ExplorerPage = () => {
  const [topPosts, setTopPosts] = useState([]);

  const getTopPosts = async () => {
    const topPosts = `http://localhost:3001/posts`;
    try {
      let res = await axios.get(topPosts);
      setTopPosts(res.data.payload);
    } catch (err) {
      setTopPosts([]);
    }
  };

  useEffect(() => {
    getRandPics();
  }, []);

  useEffect(() => {
    getTopPosts();
  }, []);

  let displayPosts = topPosts.map((pic) => {
    return (
      <div className="topTenPosts" key={pic.picture + pic.total_votes}>
        <Image className="topTenPic" image={pic.picture} />
        <p>Total Clicks: {pic.total_votes}</p>
      </div>
    );
  });

  return (
    <div className="ExplorerPage">
      <div className="SearchInput">
      <input placeholder="search"></input>

      </div>
      <div className="TopImages">{displayPosts}</div>
    </div>
  );
};

export default ExplorerPage;
