import React, { useState } from "react";
import { Link } from "react-router-dom";
import RideOnImage from "../images/RideOn.png";

const UserSignUp = () => {
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
        <img className="w-10 mb-10" src={RideOnImage} alt="RideOn" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">Enter your name.</h3>
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
            Enter your email address.
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
            <Link to={"/login"} className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="text-[10px] leading-tight">
        <p>
          We value your privacy. When you create an account with <b>RiderOn</b>, we
          collect your name, email, and phone number to provide our services.
          Your data is secure, never shared without consent, and used only for
          account management and service improvements. For questions, contact us
          at <span className="underline">privacy@rideron.com</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
