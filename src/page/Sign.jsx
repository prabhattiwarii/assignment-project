import React, { useState } from 'react'
import { hasValidationError, validationError,focusOnFeild} from '../helper/frontend'

const Sign = () => {
    const [form, setForm] = useState({email: "", password: "",full_name:"",phone:"",company:""});
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
        setSubmitting(true);
        setForm({email: "", password: "",full_name:"",phone:"",company:"",agency: "" });
        window.location.href = '/account';
    }
    const handleKeyPress =(e) =>{
        if (e.key && e.key.length === 1 && !/\d/.test(e.key)) {
            e.preventDefault();
        }
    }
    const hasSameDigits = (phone) => {
        return /^(.)\1+$/.test(phone);
    }

    const phoneRE = /^[0-9]{10}$/;
    const emailRE = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const validate = () => {
        const newError = {};
        let positionFocus = "";
        if(!form.full_name || !form.full_name.trim()){
            newError["full_name"] = "Required";
            positionFocus = positionFocus || "full_name";
        }
        if (!form.phone || !form.phone.trim()) {
            newError["phone"] = "Required";
            positionFocus = positionFocus || "phone";
        } else if (!phoneRE.test(form.phone) || hasSameDigits(form.phone)) {
            newError["phone"] = "Please enter a valid 10-digit phone number with non-repeating digits.";
            positionFocus = positionFocus || "phone";
        }
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
        if(!form.company || !form.company.trim()){
            newError["company"] = "Required";
            positionFocus = positionFocus || "company";
        }
        if (!form.agency) {
            newError["agency"] = "Please select an option";
            positionFocus = positionFocus || "agency";
        }
        setErrors(newError);
        if(positionFocus){
            focusOnFeild(positionFocus);
            return false;
        }
        return true;
    }
    return (
        <div className='sign-wrap'>
            <h2 className='heading'>Create your PopX account</h2>
            <form className="form-wrap" onSubmit={onSubmit} autoComplete='off'>
                <div className="bi-form-group">
                    <input type="text" name="full_name" id="full_name" className={`bi-form-field input-text ${(hasValidationError(errors,"full_name") ? "has-input-error" : "")}`} placeholder="full name" autoCapitalize='off' onChange={onChange} value={form.full_name}/>
                    <label htmlFor="full_name" className="bi-form-label light-txt">Full Name</label>
                    {hasValidationError(errors,"full_name") ? (<span className="has-cust-error">{validationError(errors,"full_name")}</span>) : null}
                </div>
                <div className="bi-form-group">
                    <input type="text" name="phone" id="phone" className={`bi-form-field input-text ${(hasValidationError(errors,"phone") ? "has-input-error" : "")}`} placeholder="Phone" autoCapitalize='off' onChange={onChange} value={form.phone} onKeyPress={handleKeyPress} maxLength={10}/>
                    <label htmlFor="phone" className="bi-form-label light-txt">Phone Number</label>
                    {hasValidationError(errors,"phone") ? (<span className="has-cust-error">{validationError(errors,"phone")}</span>) : null}
                </div>
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
                <div className="bi-form-group">
                    <input type="text" name="company" id="company" className={`bi-form-field input-text ${(hasValidationError(errors,"company") ? "has-input-error" : "")}`} placeholder="Company Name" autoCapitalize='off' onChange={onChange} value={form.company}/>
                    <label htmlFor="company" className="bi-form-label light-txt">Company Name</label>
                    {hasValidationError(errors,"company") ? (<span className="has-cust-error">{validationError(errors,"company")}</span>) : null}
                </div>
                <div className="bi-form-group">
                        <div className='label'>Are you an Agency?</div>
                        <input type="radio" name="agency" id="Yes" value="Yes" checked={form.agency === "Yes"} onChange={onChange} />
                        <label htmlFor="Yes" className='lable-text'>Yes</label>
                        <input type="radio" name="agency" id="No" value="No" checked={form.agency === "No"} onChange={onChange} />
                        <label htmlFor="No" className='lable-text'>No</label>
                    {hasValidationError(errors, "agency") && <span className="has-cust-error">{validationError(errors, "agency")}</span>}
                </div>
                <div className="bi-form-group btn">
                    <button type='submit' className='create-btn'>Creat Account</button>
                </div>
            </form>
        </div>
    )
}

export default Sign