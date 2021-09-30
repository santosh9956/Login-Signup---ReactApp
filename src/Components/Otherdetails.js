import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import {submitSignupForm} from '../Redux/ActionForm' ;
import Login from "./Login";
import "./style.css";
import { useDispatch } from "react-redux";

function Otherdetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.profile);
  // console.log(state, "is the redux state");
  const [othersData, setothersData] = useState({
    phonenumber: "",
    birthdate: " ",
    address: " ",
  });
  const [phoneError, setphoneError] = useState(" ");
  const [birthError, setbirthError] = useState(" ");
  const [addressError, setaddressError] = useState(" ");

  const otherDetailsFormSubmit = (e) => {
    dispatch(submitSignupForm(othersData));
    { othersData.birthdate == " " && setbirthError(" Please Enter a birth year")}

    {othersData.address == " " && setaddressError(" please enter an address")}
    {othersData.phonenumber.length &&
      othersData.birthdate != " " &&
      othersData.address != " " && 
      history.push('/login');}
    e.preventDefault();
  };

  const phoneNumberChecker = () => { 
     { othersData.phonenumber.length != 10 && setphoneError("Please Enter a 10 digit mobile number")}
  }

  const backArrowHandler = () => { 
    history.push('/signup/UserDetails');
  }

  return (
    <>
      <div className="fullcontent d-flex justify-content-center align-items-center pt-5">
        <form className="col-10 col-md-6 signup_form w3-animate-right p-5">
          <div className="d-flex justify-content-between mb-4">
            <img onClick={backArrowHandler}
              className="left_arrow"
              src="https://image.shutterstock.com/image-vector/left-arrow-vector-icon-600w-576086476.jpg"
            />

            <h3 className="text-center">Sign Up</h3>

            <img className="right_arrow" src="https://thumbs.dreamstime.com/b/right-arrow-vector-icon-black-symbol-navigation-163045948.jpg" />
          </div>

          <div className="form-group mb-4">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone no."
              // value={othersData.phonenumber}
              onBlur={phoneNumberChecker}
              onChange={(e) =>
                setothersData((prevData) => ({
                  ...prevData,
                  phonenumber: e.target.value,
                }))
                
              }
            />
            {othersData.phonenumber.length != 10? <div className="errormsg"> {phoneError} </div> :<div className="successmsg">Valid phone number</div>}
          </div>

          <div className="form-group mb-4">
            <label>Date Of Birth</label>
            <input
              type="date"
              className="form-control"
              // value={othersData.birthdate}
              onChange={(e) =>
                setothersData((prevData) => ({
                  ...prevData,
                  birthdate: e.target.value,
                }))
              }
            />
            {birthError && <div className="errormsg"> {birthError} </div>}
          </div>

          <div className="form-group mb-4">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              // value={othersData.address}
              onChange={(e) =>
                setothersData((prevData) => ({
                  ...prevData,
                  address: e.target.value,
                }))
              }
            />
            {addressError && <div className="errormsg"> {addressError} </div>}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={otherDetailsFormSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Otherdetails;
