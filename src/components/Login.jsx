import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errMessage, seterrMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const hanldeButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
    );
    seterrMessage(message);
  };
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen w-full">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover brightness-[0.4] "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="bg-black/75 w-full rounded-md max-w-md  p-16  text-white ">
          <form className=" flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-3xl font-bold mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Enter your full name"
                className="p-3 my-2 bg-gray-900/50 rounded"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email or phone number"
              className="p-3 my-2 bg-gray-900/50 rounded"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 my-2 bg-gray-900/50 rounded"
            />
            <p className="text-red-500 text-sm pt-3 font-semibold">
              {errMessage}
            </p>
            <button
              className="bg-red-600 p-2.5 mt-6 mb-2 rounded"
              onClick={hanldeButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="flex justify-between pb-5">
            <div>
              <input type="checkbox" id="remember" />
              <label
                htmlFor="remember"
                className="cursor-pointer hover:underline"
              >
                {" "}
                Rememeber me
              </label>
            </div>
            <p className="hover:underline cursor-pointer">Need help?</p>
          </div>
          <div className="text-sm text-gray-500 ">
            <p className="pb-3">
              {isSignInForm ? "New to Netflix? " : "Already a user? "}
              <span
                className="text-white hover:cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? "Sign up Now." : "Sign in Now."}
              </span>
            </p>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<span>Learn more .</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
