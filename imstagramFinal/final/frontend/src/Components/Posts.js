import React, {useState} from 'react'
import { useInput } from '../Utils/Input'
// import apiURL from '../Utils/apiURL'
const Posts = ()=>{
    const body = useInput("");
    const posts_images = useInput("");
    const [contents, setContents] = useState([]);
    const [images, setImages] = useState('')
    // const API = apiURL()
    const newContent = (e)=>{
        e.preventDefault();
        setContents([{body: `${body.value}`,
    //     setImages([{posts_images: `${posts_images.value}`
    
    // }, ...images])
        // content: `${content.value}`
    
    }, ...contents])
    }
    let display = contents.map((info, index)=>{
        return(
            <div key={index} className="contentDisplay">
                <h3>{info.body}</h3>
        <p>{info.body}</p>

            </div>
        )
    })
    // const pushPosts =e =>{
    //     history.push(`${API}/posts`)
    //   }
    return(
<>
<div className="Posts"
//  onClick={pushPosts}
 >

<form onSubmit={newContent}>
    <label>Post Body</label>
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