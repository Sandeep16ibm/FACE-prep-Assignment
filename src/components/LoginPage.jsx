import { useContext, useEffect, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import bgimg from "../assets/bgimg.png";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleUsername = (e) => {
    setInput((prev) => {
      return { ...prev, username: e.target.value };
    });
  };
  const handlePassword = (e) => {
    setInput((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.username === "foo" && input.password === "bar") {
      localStorage.setItem("loggedIn", true);
      navigate("/home");
    } else
      alert("Invalid Username or Password", {
        position: "top-center",
      });
  };

  return (
    <>
      <div className="relative -mt-[3.75rem] overflow-hidden pt-1">
        <img src={bgimg} alt="" />
        <div className="flex min-h-full items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              action="#"
              method="POST"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label className="sr-only">Email address</label>
                  <input
                    type="text"
                    required
                    className="relative block w-full rounded-t-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-sm"
                    placeholder="Username"
                    onChange={handleUsername}
                  />
                </div>
                <div>
                  <label className="sr-only">Password</label>
                  <input
                    type="password"
                    required
                    className="relative block w-full rounded-b-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-sm"
                    placeholder="Password"
                    onChange={handlePassword}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
