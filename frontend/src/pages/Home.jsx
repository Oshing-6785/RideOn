import React from "react";
import RideOnImage from "../images/RideOn.png";
import { Link } from "react-router-dom"; 
import HomeBackgroundImage from "../images/HomeBackground.png";

const Home = () => {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center pt-5 flex justify-between flex-col w-full"
        style={{
          backgroundImage: `url(${HomeBackgroundImage})`,
        }}
      >
        <img className="w-10 ml-5" src={RideOnImage} alt="RideOn" />
        <div className="bg-white pb-7 py-4 px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl font-bold">Lets Get Started With RideOn</h2>
          <Link to={'/login'} className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
