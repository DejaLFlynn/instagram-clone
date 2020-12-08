import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AContext } from "../../Providers/Context";
import { apiURL } from "../../Utils/apiURL";
import Comments from "../Comments/Comments";
//component displays comments made on posts by users that are created 
//grab context from current user to post to comment
//saving comment to state
//render comments from state

const ShowContent = ({ post_id }) => {
  const API = apiURL();
  const { currentUsers, token, loading } = useContext(AContext);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);

  const allComments = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `${API}/comments`,
        headers: {
          AuthToken: token,
        },
      });
    //  debugger
      setComments(res.data.comments);
      setUser(res.data.comments[0].user_id)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allComments();
  }, [API, token]);

  const addContent = (comments) => {
    setUser((comment) => {
      return [...comment, comments];
    });
  };
 


  const showAll = comments.map((comment) => {
    return (
      <ul className="commentList">
        <li>
          {/* {comment.user_id} */}
           {comment.content}
        </li>
      </ul>
    );
  });

  return (
    <div className="allComments">
      <div className="pastComments">{showAll}</div>
      <div className="addComments">
        <Comments post_id={post_id} addContent={addContent} />
      </div>
    </div>
  );
};
export default ShowContent;
