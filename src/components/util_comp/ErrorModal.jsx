import React, { useEffect } from "react";

export default function Modal({ content, setShowModal, dispatch }) {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(dispatch);
    }, 2000);
  });

  return (
    <div className="justify-self-stretch mb-2">
      <p className="font-bold py-1 px-10 bg-pink-100 text-pink-600 text-sm rounded-md">
        {content}
      </p>
    </div>
  );
}
