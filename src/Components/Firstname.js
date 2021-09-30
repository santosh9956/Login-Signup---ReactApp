import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useDispatch ,useSelector} from 'react-redux'
import {submitSignupForm} from '../Redux/ActionForm' ;



function Firstname() {
  const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.user);
    // console.log(state, "is the redux state");
  const [userName, setuserName] = useState({
    firstname: state.profile.firstname,
    lastname: state.profile.lastname,
  });

  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");


  const submitNameForm = (e) => {
    dispatch(submitSignupForm(userName));
    e.preventDefault();
    {
      userName.firstname == "" && setFnameError("Please enter a first name ");
    }
    {
      userName.lastname == "" && setLnameError("Please enter a last name ");
    }

    {
      userName.firstname.length && userName.lastname.length && history.push('/signup/UserDetails')
    }


    // console.log(userName);  
  };

  return (
    <>
      <div className="fullcontent d-flex justify-content-center align-items-center pt-5">
        <form className="col-10 col-md-6 signup_form w3-animate-right p-5">
          <h3 className="text-center">Sign Up</h3>
          <div className="form-group mb-4">
            <label>First Name </label>
            <input
              type="text"
              className="form-control"
              value={userName.firstname}
              placeholder="First Name"
              onChange={(e) =>
                setuserName((prevData) => ({
                  ...prevData,
                  firstname: e.target.value,
                }))
              }
            />
            {fnameError && <div className="errormsg"> {fnameError} </div>}
          </div>

          <div className="form-group mb-4">
            <label>Last Name </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={userName.lastname}
              onChange={(e) =>
                setuserName((prevData) => ({
                  ...prevData,
                  lastname: e.target.value,
                }))
              }
            />
            {lnameError && <div className="errormsg"> {lnameError} </div>}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={submitNameForm}
          >
            Submit
          </button>
        </form>
      </div>

      {/* {state ? <Signup /> : ""} */}
    </>
  );
}

export default Firstname;
