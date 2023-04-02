import React, { useState } from "react";
import { HiOutlineKey } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

// External Component
import Button from "./util_comp/Button";

// Create Password Component
export default function CreatePassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  function getStartedHandler(e) {
    e.preventDefault();

    // Suppose sending to send before navigating.
    navigate("/dashboard");
    /**
     *  Sending to the Server
     **/
  }

  // Main
  return (
    <article>
      <section className="h-screen flex flex-col justify-center items-center">
        <form
          className="w-[80%] md:w-auto md:mx-auto"
          onSubmit={(e) => getStartedHandler(e)}
        >
          <div className="text-center mb-5">
            <h1 className="text-2xl font-bold">Create Password</h1>
            <p className="text-sm text-gray-400">
              Almost there. create your password.
            </p>
          </div>
          <section className="my-5">
            <div className="flex items-center relative" id="input-parent">
              <HiOutlineKey className="absolute left-2 inline-block flex-shrink-0 text-xl text-gray-300 " />
              <input
                className="invalid:border-pink-600 border-2 border-green-300 rounded-md bg-transparent py-2 pl-8 pr-3 flex-grow outline-none "
                type="password"
                id="child-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="xxxxxxxxxx"
              />
            </div>
          </section>

          <Button btn_content={"Proceed"} />
        </form>
      </section>
    </article>
  );
}
