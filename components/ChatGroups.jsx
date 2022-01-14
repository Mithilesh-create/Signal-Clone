import { CheckCircleIcon } from "@heroicons/react/outline"
function ChatGroups(props) {
    return (
        <div className="w-full h-28 flex items-center justify-evenly relative text-white p-2" onClick={props.onClick}>
            <div className="flex w-full h-full items-center justify-between cursor-pointer rounded-lg hover:bg-gray-600 ">
                <div className="h-full w-1/5 flex items-center justify-center">
                    <div style={{ backgroundImage: `url('${props.profilePic}')` }} className="rounded-full bg-center bg-no-repeat w-14 h-14 bg-contain bg-white" />
                </div>
                <div className=" flex flex-1 flex-col ml-3 sm:ml-2">
                    <span className="text-lg  font-bold">{props.grpName}</span>
                    <span className="line-clamp-1">{props.desc}</span>
                </div>
            </div>
            <div className="w-1/6  absolute top-3 right-0 flex flex-col items-center justify-center">
                <span className="text-sm">Tue</span>
                <CheckCircleIcon width={20} height={20} className="font-bold" />
            </div>
        </div>
    )
}

export default ChatGroups
