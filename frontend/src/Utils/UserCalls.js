import axios from 'axios'
import {apiURL} from './apiURL'
import {AContext} from '../Providers/Context'


export const fetchPostUser = async(id) => {
    const API = apiURL()
   
    try {
      let res = await axios.get(`${API}/posts/:user_id`);

      return res.data.posts
    } catch (error) {
      console.log(error)
    }
  }

  export const fetchUser = async ( id, data ) => {
    const API = apiURL()
    try {
      let res = await axios.get(`${API}/users/:user_id`)
        return res.data.user;
    } catch (error) {
        console.log(error);
    }
}