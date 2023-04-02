import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineKey } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";

// External Components
import Modal from "./util_comp/ErrorModal";
import { reducer, closeModal } from "./general_utils";
import Button from "./util_comp/Button";

// Login Component
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    modalOpen: false,
    modalContent: "",
  });

  // Submit Button Handler
  function getStartedHandler(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      dispatch({ type: "EMAIL_PWD" });
    } else {
      // Suppose sending to send before navigating.
      navigate("/dashboard");

      /**
       *  Sending to the Server
       **/
    }
  }

  // Main
  return (
    <article>
      <section className="h-screen flex flex-col justify-center items-center">
        <div>
          {state.modalOpen && (
            <Modal
              content={state.modalContent}
              setShowModal={closeModal}
              dispatch={dispatch}
            />
          )}
        </div>

        <form
          className="w-[80%] md:w-auto md:mx-auto"
          onSubmit={(e) => getStartedHandler(e)}
        >
          <div className="flex justify-center mb-5">
            <Link to="/">
              <BsEmojiSmile className="text-6xl text-orange-400" />
            </Link>
          </div>
          <div className="text-center mb-5">
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-sm text-gray-400">
              Receive message faster & quicker
            </p>
          </div>
          <section className="my-5">
            <div className="flex items-center relative" id="input-parent">
              <HiOutlineMail className="absolute left-2 inline-block flex-shrink-0 text-xl text-gray-300 " />
              <input
                className="invalid:border-pink-600 border-2 border-green-300 rounded-md bg-transparent py-2 pl-8 pr-3 flex-grow outline-none "
                type="email"
                id="child-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your emaill address"
              />
            </div>
          </section>

          <section className="my-5">
            <div className="flex items-center relative" id="input-parent">
              <HiOutlineKey className="absolute left-2 inline-block flex-shrink-0 text-xl text-gray-300 " />
              <input
                className="invalid:border-pink-600 border-2 border-green-300 rounded-md bg-transparent py-2 pl-8 pr-3 flex-grow outline-none "
                type="password"
                id="child-input-pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="xxxxxxxxxx"
              />
            </div>
          </section>
          <div className="text-sm text-center">
            <p className="pb-2">
              I don't have an account. Click{" "}
              <b>
                <Link className="text-green-600 hover:underline" to={"/"}>
                  Get Started
                </Link>
              </b>
            </p>
          </div>
          <Button btn_content={"Login"} />
        </form>
      </section>
    </article>
  );
}
