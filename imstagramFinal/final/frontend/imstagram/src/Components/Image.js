import React from "react";

const Image = ({ pictures, className }) => {
  return <img src={pictures} className={className} alt="" />;
};

export default Image;
