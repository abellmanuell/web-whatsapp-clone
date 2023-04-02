import React from "react";
import { useParams } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";
import { RiAttachment2 } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import ChatroomHeader from "./util_comp/ChatroomHeader";

export default function Chatroom() {
  const id = useParams();
  return (
    <section className="flex flex-col h-screen">
      <ChatroomHeader />
      <div className="flex-grow px-20 p-10 bg-green-50 overflow-y-auto">
        Lorem ipsum dolor sit,
      </div>
      <div className="p-2">
        <ul className="flex items-center justify-center bg-gray-100">
          <li className="p-2 text-2xl text-gray-600">
            <BsEmojiSmile />
          </li>
          <li className="p-2 text-2xl text-gray-600">
            <RiAttachment2 />
          </li>
          <li className="flex-grow">
            <textarea
              name=""
              id=""
              cols="30"
              rows="1"
              className="p-2 resize-none rounded outline-none w-full text-sm text-neutral-700"
              placeholder="Type a message"
            ></textarea>
          </li>
          <li className="p-2 text-3xl text-gray-600 cursor-pointer">
            <MdKeyboardVoice />
          </li>
        </ul>
      </div>
    </section>
  );
}
