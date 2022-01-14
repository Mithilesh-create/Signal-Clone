import { useSelector } from "react-redux";
import ChatArea from "../components/ChatArea";
import ChatAreaSplash from "../components/ChatAreaSplash";
import Middleware from "../components/Middleware";
import Sidechats from "../components/Sidechats";
import { removeSplashData } from "../StateSlices/splashSlice";

export default function Home() {
  const stateSplash = useSelector(removeSplashData);
  return (
    <Middleware>
      <div className="flex h-screen w-full font-fontpopins">
        <Sidechats />
        {stateSplash ? <ChatArea /> : <ChatAreaSplash />}
      </div>
    </Middleware>
  );
}
