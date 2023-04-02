import { Link } from "react-router-dom";
import friend_profile_pic from "../../assets/knit-cap-photoshoot-pose-2332404.jpg";

export default function Friend() {
  return (
    <>
      <Link to={`friend/1`}>
        <div className="flex  items-center p-4 hover:bg-gray-50 space-x-5">
          <div className="flex-shrink-0">
            <img
              src={friend_profile_pic}
              alt="Abel Emmanuel"
              className={`w-14 h-14 object-cover rounded-full h`}
            />
          </div>
          <div className="flex flex-grow">
            <div className="w-full">
              <div className="flex">
                <b className="flex-grow">Davy Heart</b>
                <span className="text-xs text-center font-bold text-green-500 block">
                  20:24
                </span>
              </div>
              <div className="flex">
                <p className="text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis w-60 flex-grow">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <span className="font-bold h-6 w-6 text-xs bg-green-500 text-center p-1  text-white rounded-full">
                  2
                </span>
              </div>
            </div>
            <h1></h1>
          </div>
        </div>
      </Link>
    </>
  );
}
