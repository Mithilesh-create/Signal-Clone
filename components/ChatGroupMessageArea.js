import {
  ChevronUpIcon,
  CollectionIcon,
  EmojiHappyIcon,
  MicrophoneIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
function ChatGroupMessageArea() {
  const [Show, setShow] = useState(false);
  return (
    <div
      className="w-full h-16 flex text-gray-400 relative"
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      <div
        className={`${
          Show ? "flex " : "hidden"
        } w-full items-center justify-center h-1/2 absolute -top-1/2`}
      >
        <ChevronUpIcon width={30} height={30} className="cursor-pointer" />
      </div>
      <div className=" w-12 h-full flex items-center justify-center">
        <EmojiHappyIcon width={35} height={35} className="cursor-pointer" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("sent");
        }}
        className="flex-1 flex items-center justify-center h-full "
      >
        <input
          type="text"
          className="h-3/4 rounded-full pl-2 w-full mx-1 focus:border-blue-600 border-2 border-transparent bg-gray-700 outline-none text-white"
          placeholder="Send a message"
        />
      </form>
      <div className="md:w-1/5 w-1/4 flex items-center justify-evenly bg">
        <CollectionIcon width={30} height={30} className="cursor-pointer" />
        <MicrophoneIcon width={30} height={30} className="cursor-pointer" />
        <PlusIcon width={30} height={30} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default ChatGroupMessageArea;
