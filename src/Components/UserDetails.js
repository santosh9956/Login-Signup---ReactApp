import React,{useState , useEffect} from 'react'
import './style.css'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import validator from 'validator';
import {strongPasswordChecker} from '../Lib/tools';
import {confirmPasswordChecker} from '../Lib/tools';
import { useDispatch,useSelector} from 'react-redux';
import {submitSignupForm} from '../Redux/ActionForm' ;
const cloneUserData =[ ];

function UserDetails() {
    const dispatch = useDispatch()
    const history = useHistory();
    const state = useSelector((state) => state.user);
    // console.log(state, "is the redux state");
     const [userData, setUserData] = useState({
        email : state.profile.email,
        password: state.profile.password,
        cpassword: state.profile.password
    });
    const [passwordErrorMessage , setPasswordErrorMessage] = useState('');
    const [passwordSuccessMessage , setPasswordSuccessMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailSuccess , setEmailSuccess] = useState('');
    const [strongPasswordError , setStrongPasswordError] = useState(' ');
    const [strongPasswordSuccess , setStrongPasswordSuccess] = useState(' ');

    const submitUserData = (e) => {
        e.preventDefault();
        cloneUserData.push(userData);
        console.log(cloneUserData ,"clone data");
    }

    const signupFormSubmit = () =>{
        {(validator.isEmail(userData.email)) && (validator.isEmail(userData.email)) && confirmPasswordChecker(userData.password , userData.cpassword)&& history.push('/signup/OtherDetails') }
        console.log(userData , "within submitform signup");
        dispatch(submitSignupForm(userData));
    }

    // -------------------- Email , password , cpassword checker 
    const emailCheckHandler = () => {
        {(validator.isEmail(userData.email)) ? setEmailSuccess('Your Email is Verified'):setEmailError('Enter a valid Email!')}
    }

    const PasswordCheckHandler = () => {
        // console.log(userData.password , 'usedata password');
        // console.log(strongPasswordChecker(userData.password) , "this is password");
        {strongPasswordChecker(userData.password)?setStrongPasswordSuccess('You Entered a Strong Password !'):setStrongPasswordError('Password must be greater than 8 and Contains  a Uppercase,lowercase and special character (@,$,#..)')
        }

    }

    const confirmPasswordCheckHandler = () => {
        {confirmPasswordChecker(userData.password , userData.cpassword) ? setPasswordSuccessMessage('Your Password & Confirm Password is same!') : setPasswordErrorMessage('Your password and confirm password is not same ')}
    }

    const backArrowHandler = () => {
        history.push('./firstname');
    }

    return (
        <>
            <div className="fullcontent d-flex justify-content-center align-items-center pt-5">
                <form className="col-10 col-md-6 signup_form w3-animate-right p-5"  onSubmit={submitUserData}>
                    <div className="d-flex justify-content-between mb-4">
                    <img onClick={backArrowHandler} className="left_arrow" src="https://image.shutterstock.com/image-vector/left-arrow-vector-icon-600w-576086476.jpg" />

                    <h3 className="text-center">Sign Up</h3>

                     <img  className="right_arrow" src="https://thumbs.dreamstime.com/b/right-arrow-vector-icon-black-symbol-navigation-163045948.jpg" />  
                    </div>
            
               
                <div className="form-group mb-4">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="email@gmail.com" value={userData.email} onChange={e => setUserData((prevData) => ({...prevData , email:e.target.value}))} onBlur={emailCheckHandler}/>
                    {(validator.isEmail(userData.email))?<div className="successmsg"> {emailSuccess} </div>:<div className="errormsg"> {emailError} </div>}

                
                </div>

                <div className="form-group mb-4">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={userData.password} onChange={e => setUserData((prevData) => ({ ...prevData, password: e.target.value }))} onBlur={PasswordCheckHandler}
                    />
                    {strongPasswordChecker(userData.password)?<div className="successmsg"> {strongPasswordSuccess} </div> :<div className="errormsg"> {strongPasswordError} </div> }
                </div>

                <div className="form-group mb-4">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" value={userData.cpassword}
                    onChange={e => setUserData((prevData)=>({...prevData , cpassword:e.target.value}))} onBlur={confirmPasswordCheckHandler}/>
                    {confirmPasswordChecker(userData.password , userData.cpassword)?<div className="successmsg"> {passwordSuccessMessage} </div>: <div className="errormsg"> {passwordErrorMessage} </div>}
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={signupFormSubmit}>Sign Up</button>
                </form>
            </div>

            {/* {state ? <Otherdetails /> : ' '} */}
        </>
            
    )
}

export default UserDetails ;
