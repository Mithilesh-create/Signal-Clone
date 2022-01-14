import { useSelector } from "react-redux";
import { chatSliceName, chatSliceProfile } from "../StateSlices/chatInfoSlice";
import ChatGroupHeader from "./ChatGroupHeader";
import ChatGroupMessageArea from "./ChatGroupMessageArea";
import ChatMessages from "./ChatMessages";
import ChatMessagesReceive from "./ChatMessagesReceive";

function ChatArea() {
    const chatName = useSelector(chatSliceName)
    const ProfilePic = useSelector(chatSliceProfile)
    return (
        <div className="bg-gray-900 w-full h-full flex flex-col">
            <ChatGroupHeader />
            <div className=" flex-1 flex flex-col overflow-y-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-xl scrollbar-thin">
                <div className="w-full h-1/3 flex flex-col items-center justify-between text-white mb-2">
                    <div className="bg-center border bg-white bg-contain bg-no-repeat rounded-full md:w-52 md:h-52 h-32 w-32" style={{
                        backgroundImage:
                            `url(${ProfilePic})`,
                    }} />
                    <span className="text-center font-bold text-2xl ">{chatName}</span>

                </div>
                <div className="flex-1 flex flex-col-reverse">
                    <ChatMessagesReceive message="Hello"/>
                    <ChatMessages message="Hii"/>
                </div>
            </div>
            <ChatGroupMessageArea />
        </div>
    )
}

export default ChatArea;
