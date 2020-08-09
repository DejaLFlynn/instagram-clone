import React, {useState} from 'react'
import { useInput } from '../Utils/Input'
import {apiURL} from '../Utils/apiURL'
import Drop from '../Utils/Drop'
import axios from 'axios'
const Posts = ()=>{
    const body = useInput("");
    const posts_images = useInput("");
    const [contents, setContents] = useState([]);
    const [images, setImages] = useState([])
    const API = apiURL()

    // useEffect(() => {
    //     fetchPosts = async()=>{
    //         let res = await  axios({
    //             method: 'get',
    //             url: '/users'
    //         })
    //         setImages(res.data.posts)
    //     }
    // }, []);
    const newContent = (e)=>{
        e.preventDefault();
        setContents([{body: `${body.value}`,
    
    }, ...contents])
    }
    let display = contents.map((info, index)=>{
        return(
            <div key={index} className="contentDisplay">
             
        <p>{info.body}</p>

            </div>
        )
    })
   
    return(
<>
<div className="Posts"
 >

<form onSubmit={newContent}>
    <label>Post Body</label>
    <Drop/>

    <input type="text" placeholder="add caption" name="body" {...body}/>
    <button type="submit" className="captionButton">Post</button>

</form>
<ul>
    {display}
</ul>
</div>
</>
    )

}

export default Posts;