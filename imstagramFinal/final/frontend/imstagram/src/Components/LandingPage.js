import React from 'react'
import '../CSS/LandingPage.css'


const LandingPage=()=>{


    return(
    <div className ="landingPage">

        <div className="leftSide">

        <div className="phonesContainer">

        <img className="iphone2" src="https://www.freeiconspng.com/uploads/iphone-png-14.png"></img>
        {/* <img class="iphone1Image"transitionEnterTimeout={500} transitionLeaveTimeout={300} src="https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/75510/My-favourite-cloudscape-of-the-year-iphone-x-wallpaper-ilikewallpaper_com.jpg" alt=""></img> */}
        {/* <img class="iphone1Image" transitionEnterTimeout={500} transitionLeaveTimeout={300} src="https://media.idownloadblog.com/wp-content/uploads/2020/04/iPhone-SE-2020-wallpaper-AR72014-iDownloadBlog-Silk-Purple-iPhone-DARK.png" alt=""></img>
        <img class="iphone1Image" transitionEnterTimeout={500} transitionLeaveTimeout={300} src="/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" alt=""></img>
        <img class="iphone1Image" transitionEnterTimeout={500} transitionLeaveTimeout={300} src="/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" alt=""></img>
        <img class="iphone1Image" transitionEnterTimeout={500} transitionLeaveTimeout={300} src="/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" alt=""></img> */}
        <img className="iphone1" src="https://pluspng.com/img-png/iphone-png-png-iphone-png-740.png"></img>
        </div>
        </div>
        <div className="rightSide">

        <div className="signIn">
        <h1 className="Imstagram">Imstagram</h1>
        <input placeholder="Phone number or Email"></input>
        <input placeholder="Password"></input>
        <button >Log In</button>
        Log In with Facebook
        <a href="https://www.facebook.com/"> Facebook</a>
        
       
    </div>
    <div className ="SignUp">
    Don't have an account?
    <a href="https://www.instagram.com/accounts/emailsignup/">Sign Up</a>
    
    </div>
        </div>
    </div>
    

    )
}

export default LandingPage