import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
// import video1 from "./video1.mp4";

function Parent() {
  return (
    <>
    <div  className=' d-flex justify-content-center align-items-center pt-5'>
      <div class="card col-12 col-sm-6" >
        <img className='h-50'  src="https://thumbs.dreamstime.com/z/beautiful-small-statue-lord-ganesha-clay-lamp-rose-petals-against-red-golden-background-hinduism-religion-concept-172858013.jpg" class="card-img-top" alt="Image_things" />
        <div class="card-body d-flex flex-column align-items-center">
              <button className="signup_button " >
                <Link className='text_decoration signup_Link' to='/signup/firstname'> Create an account </Link>
              </button>

              <button className="login_button " >
                <Link className='login_links text_decoration' to="/login">  Already have an account </Link>
              </button>
        </div>
      </div>
    </div>
        
    </>
  );
}

export default Parent;
