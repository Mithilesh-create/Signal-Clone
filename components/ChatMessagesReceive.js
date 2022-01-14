import {
  DotsHorizontalIcon,
  EmojiHappyIcon,
  ReplyIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

function ChatMessagesReceive(props) {
  const [Show, setShow] = useState(false);
  return (
    <div
      className="w-full h-auto flex text-white my-2 p-2"
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div
        className="bg-gray-600 md:w-3/4 p-2 rounded-xl mr-2 text-left"
        style={{
          width: "auto",
          maxWidth: "60%",
        }}
      >
        {props.senderName ? (
          <span className="flex items-center text-md text-white font-bold mb-2 justify-between w-full">
            {props.senderName}
          </span>
        ) : null}
        {props.message}
        <span className="flex items-center text-sm text-white font-bold mt-4 justify-between w-28">
          Tue 3:03pm
        </span>
      </div>
      {Show && (
        <div className="h-full w-1/3 md:w-1/5 flex items-center justify-evenly text-white ">
          <DotsHorizontalIcon
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <ReplyIcon width={30} height={30} className="cursor-pointer" />
          <EmojiHappyIcon width={30} height={30} className="cursor-pointer" />
        </div>
      )}
    </div>
  );
}

export default ChatMessagesReceive;
