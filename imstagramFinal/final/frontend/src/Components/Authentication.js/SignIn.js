import React from "react";
import Input from './Input'

const SignIn = () => {
  return (
      <>
    <div className="SignIn">
      <div className="signInForm">
        <form className="form" 
        // onSubmit={handleSubmit}
        >
          <div>
            <Input
              className={"userInputs"}
              placeholder={"Enter Username"}
            //   input={username}
            />
          </div>
          <div>
            <Input
              className={"userInputs"}
              placeholder={"Enter Password"}
            //   input={email}
            />
            </div>
            </form>
         </div>
    </div>
    </>
  );
};
export default SignIn;
