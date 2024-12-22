import React, { useState } from "react";
import { Link } from "react-router-dom";
import DriverLogo from "../images/DriverLogo.png";
const RiderLogin = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [riderData, setriderData] = useState("");
    const submitHandler = (e) => {
      e.preventDefault();
      setriderData({
        email: email,
        password: password,
      });
      setEmail("");
      setPassword("");
    };
  return (
    <div className="p-9 h-screen flex flex-col justify-between">
      <div>
        <img className="w-10 mb-10" src={DriverLogo} alt="RideOn" />
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
            Join as a Rider?
            <Link to={"/rider-signup"} className="text-blue-600">
              Create new account as Rider
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to={'/login'} className="bg-[#d5622d] flex items-center justify-center text-white font-semi-bold mb-20 rounded px-4 w-full text-lg placeholder:text-base">
          Login as User
        </Link>
      </div>
    </div>
  )
}

export default RiderLogin
