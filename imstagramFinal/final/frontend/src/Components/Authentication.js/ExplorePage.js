import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiURL} from '../../Utils/apiURL'

const ExplorePage =()=>{
    const [posts, setPosts]=useState([])
    const API = apiURL()
    
    useEffect(() => {
        const fetchPosts = async()=>{
            let res = await axios({
                method: 'get',
                url: `${API}/posts`
            })
            debugger
            setPosts(res.data.posts_images);
        }
        fetchPosts()
    }, []);

    return (
        <div className="User">
            <h1>All Posts </h1>
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