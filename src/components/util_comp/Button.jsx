import React from "react";

export default function Button({ btn_content }) {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="text-center mt-3 rounded-md w-full md:w-auto bg-green-600 py-2 px-3 text-white font-bold text-sm hover:bg-green-500 active:bg-green-700 active:ring active:ring-green-200"
      >
        {btn_content}
      </button>
    </div>
  );
}
