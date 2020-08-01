import React from 'react'
import { Link } from 'react-router-dom';
const Error =() =>{
    return (
    <div className="error">

        PageNotFound 404
        <Link to="/">Go to Home </Link>
    </div>
    )
}

export default Error