import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
    console.log("this is home page");
    const state = useSelector((state) => state.user);
    return(<div className="home__content container-fluid">
        <h2>{state.profile.firstname}</h2>
        <p>This is your home page.</p>
    </div>)
}


export default Home

