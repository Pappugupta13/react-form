import React, { useState } from 'react'
import './data.css'

const Data = () => {
    const [action, setaction] = useState("Sign Up")

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                {/* <div className="underline"></div>    */}
            </div>
            <div className="submit-container">
                {/* <div className="submit" >SIgn Up</div> */}

                <div className={action === "Sing Up" ? "submit gray" : "submit"}>Login</div>
                <div className={action === "login" ? "submit gray" : "submit"}>sign up</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <p>Name<span>*</span></p>
                    <input type="text" placeholder='Enter your name' />
                </div>
                <div className="input">
                    <p>Email<span>*</span></p>
                    <input type="email" placeholder='Enter your emali' />
                </div>
                <div className="input">
                    <p>password<span>*</span></p>
                    <input type="password" placeholder='Enter your password' />
                </div>
            </div>
            <div className="forgot-password">Lost Password?<span>Click Here!</span></div>

        </div>
    )
}

export { Data }