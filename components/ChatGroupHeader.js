import {
  CheckIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { chatSliceName, chatSliceProfile } from "../StateSlices/chatInfoSlice";
chatSliceName;
function ChatGroupHeader() {
  const Name = useSelector(chatSliceName);
  const Profile = useSelector(chatSliceProfile);
  return (
    <div className="text-white h-20 w-full flex justify-between">
      <div className="flex w-1/2 h-full items-center justify-between cursor-pointer">
        <div className="h-full w-1/2 md:w-1/5 flex items-center justify-center">
          <div
            style={{
              backgroundImage: `url(${Profile})`,
            }}
            className="rounded-full bg-center bg-no-repeat w-14 h-14 bg-contain bg-white border border-white"
          />
        </div>
        <div className=" flex flex-1 flex-col ml-3 sm:ml-2">
          <span className="text-lg  font-bold">{Name}</span>
          <div className="flex items-center text-lg ">
            <CheckIcon width={20} height={20} />
            <span>Verified</span>
          </div>
        </div>
      </div>
      <div className="w-1/3 md:w-1/5 h-full flex items-center justify-evenly">
        <SearchIcon width={30} height={30} className="cursor-pointer" />
        <ChevronDownIcon width={30} height={30} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default ChatGroupHeader;
