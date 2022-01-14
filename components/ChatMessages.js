import {
  CheckCircleIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  ReplyIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

function ChatMessages(props) {
  const [Show, setShow] = useState(false);
  return (
    <div
      className="w-full h-auto flex flex-row-reverse p-2  text-white my-2 "
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div
        className="bg-blue-600 md:w-3/4 p-2 rounded-xl mr-2 text-left flex flex-col items-end"
        style={{
          width: "auto",
          maxWidth: "60%",
        }}
      >
        {props.message}
        <span className="flex items-center text-sm text-white font-bold mt-4 justify-between w-28">
          Tue 3:03pm
          <CheckCircleIcon width={20} height={20} />
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

export default ChatMessages;
