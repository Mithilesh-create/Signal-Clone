import Image from "next/image";
import Img from "../assets/Signal.png"
function ChatAreaSplash() {
    return (
        <div className="bg-gray-900 w-full h-full flex items-center justify-center text-xl text-white">
            <div className="flex flex-col items-center justify-evenly w-full h-1/2">
                <Image src={Img} width={150} height={150} />
                <span className="text-3xl">Welcome to Signal</span>
                <span className="flex flex-row">See
                    <a href="#" className="text-blue-500 px-2">
                        what's new
                    </a>
                    in this update
                </span>
            </div>
        </div>
    )
}

export default ChatAreaSplash;
