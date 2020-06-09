import React, { useState, useEffect } from "react";
import Image from "./Image";
import axios from "axios";
import "../../../CSS/Explore.Css";

// Isaiah  8:31 PM
//     const getPostsCall = () => {
//         getAllPosts(currentUser, updateUser).then(posts => {
//             setTimeout(() => {
//                 setPosts(posts.map(post => {
//                     return (
//                         <Post post={post} onDelete={getPostsCall} key={post.id}/>
//                     )
//                 }));
//                 setLoading(false);
//             }, 1000)
//         });
//     }
const ExplorerPage = () => {
  const [topPosts, setTopPosts] = useState([]);

  const getTopPosts = async () => {
    const topPosts = `http://localhost:4001/posts`;
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
        {/* <Image className="topTenPic" image={pic.picture} /> */}
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
