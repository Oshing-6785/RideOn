import React, { useState } from "react";
import { Link } from "react-router-dom";
import DriverLogo from "../images/DriverLogo.png";

const RiderSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
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
          <h3 className="text-base font-medium mb-2">Enter the rider's name.</h3>
          <div className="flex gap-4 mb-7">
            <input
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 rounded px-4 border text-base placeholder:text-sm"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 rounded px-4 border text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">
            Enter rider's email address.
          </h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-base placeholder:text-sm"
            type="email"
            placeholder="example@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter your password.</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="********"
          />
          <button className="bg-black text-white font-semi-bold mb-3 rounded px-4 w-full text-base placeholder:text-sm">
            Signup Here
          </button>
          <p className="text-center">
            Already have a account ?
            <Link to={"/rider-login"} className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="text-[10px] leading-tight">
        <p>
          This site is protected by <span className="underline">industry-standard</span> security measures. Your
          personal information is secure and used only to enhance your
          experience with <b>RiderOn</b>. For details, contact <span className="underline">privacy@rideron.com</span>.
        </p>
      </div>
    </div>
  );
};

export default RiderSignup;
