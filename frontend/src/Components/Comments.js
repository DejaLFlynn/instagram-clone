import React, {useState, useContext} from 'react'
import axios from 'axios'
import {apiURL} from '../Utils/apiURL'
import {AContext} from '../Providers/Context'
export default function CommentsForm() {
    const [content, setContent] = useState("")
    const {token} = useContext(AContext)
    const API = apiURL()


    const handleSubmit = async (e) =>{
        e.preventDefault()
    try {
        let res = await axios({
            method: 'post',
            url: `${API}/comments/:id`,
            // data:{id: res.content.uid},
            headers:{
                AuthToken: token
            }
        })
    } catch (error) {
        
    }
    }

    return(

        <form onSubmit={handleSubmit}>
            <textarea value={content} onChange={(e)=> setContent(e.currentTarget.value)} type="text" placeholder="comments"/>
            <button type="submit">Add Comment</button>
        </form>
    )
}