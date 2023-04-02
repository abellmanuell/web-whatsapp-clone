import React, { useState } from "react";
import DashboardHeader from "./util_comp/DashboardHeader";
import Friend from "./util_comp/Friend";
import SearchBar from "./util_comp/SearchBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const [showFriend, setShowFriend] = useState(true);

  function addHandler() {
    setShowFriend(true);
  }

  return (
    <article className="bg-gradient-sharp h-screen max-w-full overflow-x-hidden">
      <section className="w-[200%] md:w-full mx-auto flex md:grid grid-cols-[minmax(400px,_18.75rem)_1fr] 2xl:w-4/5">
        <div className="w-full bg-white h-screen flex flex-col border-r-[0.2px]">
          <DashboardHeader />
          <SearchBar />
          <section className=" overflow-x-auto">
            <Friend />
          </section>
        </div>
        <div className="w-full bg-gray-100">
          {showFriend ? <Outlet /> : "Hello"}

          {/* <button onClick={addHandler}>Add</button> */}
        </div>
      </section>
    </article>
  );
}
