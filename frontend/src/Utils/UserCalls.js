import axios from 'axios'
import {apiURL} from './apiURL'

export const fetchPostUser = async(id) => {
    const API = apiURL()
    try {
      let res = await axios.get(`${API}/posts`);

      return res.data.posts
    } catch (error) {
      console.log(error)
    }
  }

  export const fetchUser = async ( id, data ) => {
    const API = apiURL()
    try {
      let res = await axios({
        method: "get",
        url: `${API}/users/${currentUsers.id}`,
        headers: {
          AuthToken: token,
        },
      });
        return res.data.user;
    } catch (error) {
        console.log(error);
    }
}