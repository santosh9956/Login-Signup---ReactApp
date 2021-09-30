import React,{useRef ,useState } from "react";
import './login.css';
import { Link , useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const Login = () => {
    const history = useHistory();
    const state = useSelector((state) => state.user);
    // console.log(state, "is the redux state");
    const [loginData, setloginData] = useState({
        email: '',
        password: ''
    })

    const formSubmitHandler = (event) => {
        event.preventDefault();  
    }

    const submitLoginForm = () => {
        if( loginData.email != state.profile.email){
            alert(' Your email is not exit ');
            console.log(loginData.email , state.profile.email , "this is email");
        }else if(loginData.password != state.profile.password){
            alert('you enter incorrect password');
            console.log(loginData.password , state.profile.password , "thisis passwork");
        }
        {
            loginData.email == state.profile.email && loginData.password == state.profile.password && history.push('/homepage')
        }
    }

    return(
        <>
    <div className="container-fluid">
            <div className="row main-content bg-success text-center">
                <div className="col-md-4 text-center company__info ">
                    <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                    <h4 className="company_title">Your Company Logo</h4>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 login_form p-4">
                    <div className="container-fluid">
                        <div className="row">
                            <h2>Log In</h2>
                        </div>
                        <div className="row">
                            <form control="" className="form-group" onSubmit={formSubmitHandler}>
                                <div className="row">
                                    <input type="email" name="username" id="username" className="form__input" placeholder="Username" onChange={(e) =>setloginData((prevData) => ({...prevData , email:e.target.value}))} />
                                </div>
                                <div className="row">
                                    <span className="fa fa-lock"></span> 
                                    <input type="password" name="password" id="password" className="form__input" placeholder="Password" onChange={(e) =>setloginData((prevData) => ({...prevData , password:e.target.value}))}/>
                                </div>
                                <div className="text-start">
                                    <input type="checkbox" name="remember_me" id="remember_me" className="mr" />
                                    <label htmlFor="remember_me">Remember Me!</label>
                                </div>
                                <div className="row">
                                    <input type="submit" value="Submit" className="btn" onClick={submitLoginForm} />
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <p>Don't have an account? <Link to="/signup/firstname">Register Here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login;








