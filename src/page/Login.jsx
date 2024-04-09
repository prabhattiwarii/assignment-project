import React, { useState } from 'react'
import { hasValidationError, validationError,focusOnFeild} from '../helper/frontend'

const Login = () => {
    const [form, setForm] = useState({email: "", password: ""});
    const [errors,setErrors] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const onChange = (e) => {
        const {name,value} = e.target;
        setForm((prevState) => ({...prevState,[name]: value}));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(submitting){
            return;
        }
        if(!validate()){
            return;
        }
        setForm({email: "", password: ""});
        window.location.href = '/account';
    }
    const emailRE = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const validate = () => {
        const newError = {};
        let positionFocus = "";
        if(!form.email || !form.email.trim()){
            newError["email"] = "Required";
            positionFocus = positionFocus || "email";
        }else if(!emailRE.test(form.email)){
            newError["email"] = "Enter a valid email";
            positionFocus = positionFocus || "email";
        }
        if(!form.password || !form.password.trim()){
            newError["password"] = "Required";
            positionFocus = positionFocus || "password";
        }
        setErrors(newError);
        if(positionFocus){
            focusOnFeild(positionFocus);
            return false;
        }
        return true;
    }
    return (
        <div className='login-wrap'>
            <h2 className='heading'>Signin to your PopX account</h2>
            <p className='sub-heading' style={{margin:"0px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <form className="form-wrap" onSubmit={onSubmit} autoComplete='off'>
                <div className="bi-form-group">
                    <input type="text" name="email" id="email" className={`bi-form-field input-text ${(hasValidationError(errors,"email") ? "has-input-error" : "")}`} placeholder="Email Address" autoCapitalize='off' onChange={onChange} value={form.email}/>
                    <label htmlFor="email" className="bi-form-label light-txt">Email Address</label>
                    {hasValidationError(errors,"email") ? (<span className="has-cust-error">{validationError(errors,"email")}</span>) : null}
                </div>
                <div className="bi-form-group">
                    <input type="password" name="password" id="password" className={`bi-form-field input-text ${(hasValidationError(errors,"password") ? "has-input-error" : "")}`} placeholder="password" autoCapitalize='off' onChange={onChange} value={form.password}/>
                    <label htmlFor="password" className="bi-form-label light-txt">Password</label>
                    {hasValidationError(errors,"password") ? (<span className="has-cust-error">{validationError(errors,"password")}</span>) : null}
                </div>
                <div className="bi-form-group btn">
                    <button type='submit' className='login'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login