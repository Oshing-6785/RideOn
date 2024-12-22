import React, { useState } from "react";
import { Link } from "react-router-dom";
import RideOnImage from "../images/RideOn.png";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-9 h-screen flex flex-col justify-between">
      <div>
        <img className="w-10 mb-10" src={RideOnImage} alt="RideOn" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">
            Enter your email address.
          </h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="example@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter your password.</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="********"
          />
          <button className="bg-black text-white font-semi-bold mb-3 rounded px-4 w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Are you new?
            <Link to={"/signup"} className="text-blue-600">
              Create a new account as User
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/rider-login"}
          className="bg-[#10b461] flex items-center justify-center text-white font-semi-bold mb-20 rounded px-4 w-full text-lg placeholder:text-base"
        >
          Login as Rider
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
