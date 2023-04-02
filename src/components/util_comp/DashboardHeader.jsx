import { Link } from "react-router-dom";
import { MdGroups2 } from "react-icons/md";
import { AiOutlineLeft } from "react-icons/ai";
import { TbCircleDashed } from "react-icons/tb";
import { MdMessage } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";

import profile_pic from "../../assets/profile_pic.jpg";

export default function DashboardHeader() {
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
                src={profile_pic}
                alt="Abel Emmanuel"
                className={`w-10 h-10 object-cover rounded-full h`}
              />
            </div>
          </Link>
        </li>
        <li className="flex-grow"></li>
        <li className="p-3 text-2xl text-gray-600 cursor-pointer active:bg-neutral-200 rounded-full">
          <MdGroups2 />
        </li>
        <li className="p-3 text-2xl cursor-pointer active:bg-neutral-200 rounded-full">
          <div className="relative">
            <span className="h-2 w-2 bg-[#16654b] inline-block absolute rounded-full right-0"></span>
            <TbCircleDashed className="text-gray-600" />
          </div>
        </li>
        <li className="p-3 text-2xl text-gray-600 cursor-pointer active:bg-neutral-200 rounded-full">
          <MdMessage />
        </li>
        <li className="p-3 text-2xl cursor-pointer text-gray-600 active:bg-neutral-200 rounded-full">
          <RxDotsVertical />
        </li>
      </ul>
    </div>
  );
}
