import React from 'react';
import './style.css';
import img from '../assets/images/image.png';
import arrow from '../assets/images/arrow-right.png';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // Object.values(formErrors).forEach(val => {
    //     val.length > 0 && (valid = false);
    // });

    // Object.values(rest).forEach(val => {
    //     val === null && (valid = false);
    // });

    return valid;
};

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };
    



    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 || emailRegex.test(value) ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 || emailRegex.test(value) ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email  = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length <  6 || emailRegex.test(value) ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div className="container">
                <div className="main-content">
                    <div className="left">
                        <div className="navigation">
                            <div>
                                <img width="15px" src={arrow} alt="arrow right" />
                                <p className="text"><a className="link" href="../account/account.html">Go back</a>
                                </p>
                            </div>
                            <p className="text">Have an account?
                        <a className="link" href="../../index.html">Sign in</a>
                            </p>
                        </div>
                        <form className="from" onSubmit={this.handleSubmit} noValidate>
                            <div className="title-and-subtitle">
                                <h1 className="form__title">Registration</h1>
                                <p className="text">Registration on the internal platform</p>
                            </div>
                            <div className="inputs-wrapper">
                                <input className={formErrors.firstName.length > 0 ? "form__input error" : "form__input"} id="input" type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} noValidate />
                                {formErrors.firstName.length > 0 && (
                                    <span className="errorMessage">{formErrors.firstName}</span>
                                )}
                                <input className={formErrors.lastName.length > 0 ? "form__input error" : "form__input"} id="input" type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} noValidate />
                                {formErrors.lastName.length > 0 && (
                                    <span className="errorMessage">{formErrors.lastName}</span>
                                )}
                                <input className={formErrors.email.length > 0 ? "form__input error" : "form__input"} id="input" type="email" name="email" placeholder="Email Address" onChange={this.handleChange} noValidate />
                                {formErrors.email.length > 0 && (
                                    <span className="errorMessage">{formErrors.email}</span>
                                )}
                                <input className={formErrors.password.length > 0 ? "form__input error" : "form__input"} id="input" type="password" name="password" placeholder="Password" onChange={this.handleChange} noValidate />
                                {formErrors.password.length > 0 && (
                                    <span className="errorMessage">{formErrors.password}</span>
                                )}
                                {/* <input className="form__input" type="checkbox" id="check" required />
                                <p className="text">I
                            have read the <a className="link" href="">Terms and
                                Conditions</a>.</p> */}
                                <input type="submit" className="form__input" value="Registration now" />
                            </div>
                        </form>
                    </div>
                    <div className="right">
                        <img src={img} alt="img" />
                    </div>
                </div>
            </div>
        )
    }
}
