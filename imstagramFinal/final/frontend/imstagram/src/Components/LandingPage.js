import React from 'react'
import '../CSS/LandingPage.css'


const LandingPage=()=>{


    return(
    <div className ="landingPage">

        <div className="leftSide">

        <div className="phonesContainer">

        {/* <img className="iphone2" src="https://www.freepngimg.com/thumb/marketing/70806-development-instagram-mobile-marketing-app-iphone-user.png"></img> */}
        <img className="instagif" src="https://media.giphy.com/media/hsDY1IPzpP4DcB1Ba5/giphy.gif"></img>
        {/* <img class="iphone1Image"transitionEnterTimeout={500} transitionLeaveTimeout={300} src="https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/75510/My-favourite-cloudscape-of-the-year-iphone-x-wallpaper-ilikewallpaper_com.jpg" alt=""></img> */}
        {/* <img class="iphone1Image" transitionEnterTimeout={500} transitionLeaveTimeout={300} src="https://media.idownloadblog.com/wp-content/uploads/2020/04/iPhone-SE-2020-wallpaper-AR72014-iDownloadBlog-Silk-Purple-iPhone-DARK.png" alt=""></img> */}
        {/* <img className="iphone1" src="https://pluspng.com/img-png/iphone-png-png-iphone-png-740.png"></img> */}
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
        
       
    <div className ="SignUp">
    Don't have an account?
    <br></br>
    <a href="https://www.instagram.com/accounts/emailsignup/">Sign Up</a>
    <br></br>
    <button placeholder="guestLogin">Guest Login</button>
    </div>
    <img className="apple"src="https://i.ya-webdesign.com/images/app-store-download-button-png.png"></img>
    <img className="google"src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"></img>      </div>
    </div>
    
    </div>

    )
}

export default LandingPage