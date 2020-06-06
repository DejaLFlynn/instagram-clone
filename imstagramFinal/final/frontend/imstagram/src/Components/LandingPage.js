import React from 'react'
import '../CSS/LandingPage.css'


const LandingPage=()=>{


    return(
    <div className ="landingPage">

        <div className="leftSide">

        <div className="phonesContainer">

        <img className="iphone2" src="https://www.freeiconspng.com/uploads/iphone-png-14.png"></img>
        <img class="iphone1Image" src="/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" alt=""></img>
        <img class="iphone1Image" src="/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" alt=""></img>
        <img class="iphone1Image" src="/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" alt=""></img>
        <img class="iphone1Image" src="/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" alt=""></img>
        <img class="iphone1Image" src="/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" alt=""></img>
        <img className="iphone1" src="https://pluspng.com/img-png/iphone-png-png-iphone-png-740.png"></img>
        </div>
        </div>
        <div className="rightSide">

        <div className="signIn">
        <h1 className="Imstagram">Imstagram</h1>
        <input placeholder="Phone number or Email"></input>
        <input placeholder="Password"></input>
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