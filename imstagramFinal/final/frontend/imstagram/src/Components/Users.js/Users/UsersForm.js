import React, { useState } from "react";
import axios from "axios";
import { imstaURL } from "../../../util/imstaURL";

export default function CreateUsersForm({ updateUsers }) {
  const [body, setBody] = useState("");
  const API = imstaURL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: `${API}/users`,
      data: {
        body,
        id: 1,
      },
    });
    setBody("");
    updateUsers();
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <button type="submit">New User</button>
    </form>
  );
}
