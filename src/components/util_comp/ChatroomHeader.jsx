import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { RxDotsVertical } from "react-icons/rx";
import friend_profile_pic from "../../assets/knit-cap-photoshoot-pose-2332404.jpg";

export default function ChatroomHeader() {
  return (
    <div className="bg-gray-100">
      <ul className="flex items-center justify-end p-2">
        <li className="flex items-center flex-shrink-0">
          {/* <span className="sm:hidden text-gray-500 cursor-pointer hover:bg-gray-300 p-2 rounded-sm">
            <AiOutlineLeft />
          </span> */}
          <Link>
            <div>
              <img
                src={friend_profile_pic}
                alt="Abel Emmanuel"
                className={`w-10 h-10 object-cover rounded-full h`}
              />
            </div>
          </Link>
        </li>
        <li className="flex-grow"></li>
        <li className="p-3 text-2xl text-gray-600 cursor-pointer active:bg-neutral-200 rounded-full">
          <BiSearchAlt2 />
        </li>

        <li className="p-3 text-2xl cursor-pointer text-gray-600 active:bg-neutral-200 rounded-full">
          <RxDotsVertical />
        </li>
      </ul>
    </div>
  );
}
