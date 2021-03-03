import React, { Fragment, useContext, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
import { storage } from "../Firebase";
import {AContext} from "../Providers/Context"
import { apiURL } from "../Utils/apiURL";

const Upload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const {currentUsers, token} = useContext(AContext)
  const API = apiURL()
  
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${filename}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(filename)
          .getDownloadURL()
          .then((url) => {
            // setUrl(url);
            const post = {
              user_id: currentUsers.id,
              posts_images: url,
              content: content,
            };
            addPost(post)
            // addPost(post.user_id, post.posts_images, post.content);
           
            
          });
      }
      
    );
  };
  const addPost = async (post) => {
    try {
      // let res = await axios({
      //   method: "post",
      //   url: `${API}/posts/`,
      //   headers: {
      //       'AuthToken': token,
      //        'Content-Type': 'application/json'
      //   },
      //   post
      // })
      const res = await axios.post(API + `/posts`, post);
		// return res;
      debugger
      console.log(res.data)
      setMessage("post created")
      handleSubmit(post)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={handleSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
        {uploadedFile ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <h3 className="text-center">{uploadedFile.fileName}</h3>
              <img
                style={{ width: "100%" }}
                src={uploadedFile.filePath}
                alt=""
              />
            </div>
          </div>
        ) : null}
      </form>
    </Fragment>
  );
};
export default Upload;
