import React, { useState, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

// External Components
import Modal from "./util_comp/ErrorModal";
import { reducer, closeModal } from "./general_utils";
import Button from "./util_comp/Button";

// Registration Component
export default function Registration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    modalOpen: false,
    modalContent: "",
  });

  // The Submit Button Handler
  function getStartedHandler(e) {
    e.preventDefault();

    const $termsInput = document.getElementById("terms_&_conditions");
    const InvalidMsg = document.getElementById("invalid-msg");

    if (!email) {
      InvalidMsg.classList.toggle("block");
      InvalidMsg.classList.remove("hidden");

      setTimeout(() => {
        InvalidMsg.classList.toggle("hidden");
        InvalidMsg.classList.remove("block");
      }, 2000);
    }

    if ($termsInput.checked === false) {
      dispatch({ type: "CHECKBOX" });
    }

    if (email !== "" && $termsInput.checked) {
      navigate("/createpwd", { state: { email } });
    }
  }

  return (
    <article className="md:grid grid-cols-2">
      <section className="hidden md:block bg-green-600 h-screen">
        <div className="flex flex-col h-full w-4/5 pl-4 py-4 mx-auto">
          <div className="h-1/4 flex justify-end">
            <div className="self-center justify-self-end">
              <Link to={"/"}>
                <FaWhatsapp className="text-6xl text-white" />
              </Link>
            </div>
          </div>
          <div className="ml-12 select-none">
            <h1 className="text-white font-bold text-6xl py-8">
              Whatsapp Web Application
            </h1>

            <ul className="space-y-3 pr-20 text-green-200">
              <li>Send and receive messages without your phone online.</li>
              <li>
                Use Whatsapp on up to 4 linked device and 1 phone at the same
                time.
              </li>
            </ul>
          </div>
        </div>
      </section>

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
              <FaWhatsapp className="text-6xl text-green-600 md:hidden" />
            </Link>
          </div>
          <div className="text-center mb-5">
            <h1 className="text-2xl font-bold">Create an account!</h1>
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
            <p className="text-pink-600 hidden text-sm" id="invalid-msg">
              Please enter valid email address
            </p>
          </section>

          <div className="text-sm text-center">
            <p className="pb-2">
              Already got an account. Click{" "}
              <b>
                <Link className="text-green-600 hover:underline" to={"/login"}>
                  Login
                </Link>
              </b>
            </p>

            <div className="text-sm flex justify-center">
              <input
                type="checkbox"
                name="terms_&_conditions"
                id="terms_&_conditions"
              />
              <label htmlFor="terms_&_conditions">
                I agreed the{" "}
                <b className="text-green-600 hover:underline cursor-pointer">
                  Terms & Conditions
                </b>
              </label>
            </div>
          </div>
          <Button btn_content={"Get Started"} />
        </form>
      </section>
    </article>
  );
}
