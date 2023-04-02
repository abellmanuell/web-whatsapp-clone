import { Link } from "react-router-dom";

export default function Button({ btn_content }) {
  return (
    <div className="md:flex justify-center">
      <Link
        to="/"
        className="text-center mt-3 rounded-md md:inline-block block bg-green-600 py-2 px-3 text-white font-bold text-sm hover:bg-green-500 active:bg-green-700 active:ring active:ring-green-200"
      >
        {btn_content}
      </Link>
    </div>
  );
}
