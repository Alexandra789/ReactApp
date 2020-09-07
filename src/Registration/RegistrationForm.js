import React from 'react';
import './style.css';
import img from '../assets/images/image.png';
import arrow from '../assets/images/arrow-right.png';

export default function RegistrationForm() {
    return (
        <div className="container">
        <div className="main-content">
            <div className="left">
                <div className="navigation">
                    <div>
                        <img width="15px" src={arrow} alt="arrow right"></img>
                        <p className="text"><a className="link" href="../account/account.html">Go back</a>
                        </p>
                    </div>
                    <p className="text">Have an account?
                        <a className="link" href="../../index.html">Sign in</a>
                    </p>
                </div>
                <form className="from" action="">
                    <div className="title-and-subtitle">
                        <h1 className="form__title">Registration</h1>
                        <p className="text">Registration on the internal platform</p>
                    </div>
                    <div className="inputs-wrapper">
                        <input className="form__input form__input_active" type="text" placeholder="First Name" required></input>
                        <input className="form__input" type="text" placeholder="Last Name" required></input>
                        <input className="form__input" type="email" placeholder="Email Address" required></input>
                        <input className="form__input" type="password" placeholder="Password" required></input>
                        <input className="form__input" type="checkbox" id="check" required></input>
                        <p className="text">I
                            have read the <a className="link" href="">Terms and
                                Conditions</a>.</p>
                        <input type="submit" className="form__input" value="Registration now"></input>
                    </div>
                </form>
            </div>
            <div className="right">
                <img src={img} alt="img"></img>
            </div>
        </div>
    </div>
    )
}
