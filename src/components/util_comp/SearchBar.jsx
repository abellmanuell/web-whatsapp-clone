import { BiSearchAlt2 } from "react-icons/bi";
import { CgSortAz } from "react-icons/cg";

export default function SearchBar() {
  return (
    <div className="flex items-center text-gray-500">
      <div className="flex-grow flex items-center bg-gray-100 rounded-md my-2 ml-4 px-4">
        <BiSearchAlt2 className="block cursor-pointer" />
        <input
          className="w-full block my-2 pl-10 outline-none bg-transparent text-gray-500"
          type="search"
          name=""
          id=""
          placeholder="Search or start new chat"
        />
      </div>
      <CgSortAz className="inline-block mx-3 cursor-pointer text-2xl" />
    </div>
  );
}
