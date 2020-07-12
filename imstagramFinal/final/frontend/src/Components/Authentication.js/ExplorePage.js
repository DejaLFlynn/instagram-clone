import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiURL} from '../../Utils/apiURL'
import Upload from '../Upload'
import '../../CSS/Explore.CSS'
const ExplorePage =()=>{
    const [posts, setPosts]=useState([])
    // const API = apiURL()
    
    useEffect(() => {
        const fetchPosts = async()=>{
            let res = await axios({
                method: 'get',
                url: `http://localhost:4001/posts`
            })
            debugger
            setPosts(res.data.posts_images);
        }
        fetchPosts()
    }, []);

    return (
        <div className="explore">
            <h1>All Posts </h1>
            <Upload/>
           
            {/* <img src={}></img> */}
            <ul>
                {posts.map(post=>{
                    return<li key={post.id} >{post.content}</li>
                })}
            </ul>
User
        </div>
    )

}

export default ExplorePage;