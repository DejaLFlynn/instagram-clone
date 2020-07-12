import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Upload =()=>{

    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
    };
  
    const handleUpload = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image.raw);
  
      await fetch("YOUR_URL", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formData
      });
    };
  
    return (
      <div>
        <label htmlFor="upload-button">
          {image.preview ? (
            <img src={image.preview} alt="holder" width="300" height="300" />
          ) : (
            <>
              <span className="stack">
                <i className="circle" />
                <i className="store" />
              </span>
              <h5 className="text">Upload your photo</h5>
            </>
          )}
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleUpload}>Upload</button>
      </div>
    );
};
export default Upload;