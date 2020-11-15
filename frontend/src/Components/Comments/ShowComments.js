import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AContext } from "../../Providers/Context";
import { apiURL } from "../../Utils/apiURL";
import Comments from "../Comments/Comments";

const ShowContent = ({ post_id }) => {
  const API = apiURL();
  const { token } = useContext(AContext);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);

  const allComments = async (token) => {
    try {
      let res = await axios({
        method: "get",
        url: `${API}/comments/${post_id}`,
        headers: {
          AuthToken: token,
        },
      });
      setComments(res.data.body.comments);
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
          {user} {comment.content}
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
