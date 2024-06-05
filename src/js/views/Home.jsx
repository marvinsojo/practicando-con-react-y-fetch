import React from "react";
import { Link, useNavigate } from "react-router-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    console.log("Sesion iniciada");
    navigate("/profile");
  };
  return (
    <div className="text-center">
      
      <h1 className="text-center mt-5">Home</h1>
      <p>http://localhost:3000/</p>
      <p>
        <img src={rigoImage} />
      </p>
      <div>
        <button onClick={() => login()} className="btn btn-primary">
          Login
        </button>
      </div>
      <Link to="/About">About</Link>
    </div>
  );
};

export default Home;
