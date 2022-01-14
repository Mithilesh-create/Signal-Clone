import { useDispatch } from "react-redux";
import { setChatValues } from "../StateSlices/chatInfoSlice";
import { disableSplash } from "../StateSlices/splashSlice";
import ChatGroups from "./ChatGroups";
import SideHeader from "./SideHeader";

function Sidechats() {
  const dispatch = useDispatch();
  const Chats = [
    {
      profilePic: "https://bit.ly/3mwv6Af",
      desc: "Hii",
      grpName: "Manoj",
    },
    {
      profilePic: "https://bit.ly/3EAs58m",
      desc: "Buddy!!! loved your YT videos",
      grpName: "Mayuresh",
    },
    {
      profilePic: "https://actuallygoodteamnames.com/wp-content/uploads/2020/06/Seven-Member-Group-Names-Featured-Image-738x415.jpg",
      desc: "Let's do reunion tommorow at college park tommorow",
      grpName: "College Group",
    },
  ];
  return (
    <div className="bg-gray-700 h-full w-5/6 md:w-1/2 overflow-hidden">
      <SideHeader />
      <div className="overflow-y-auto bg-gray-700 h-full w-full  no-scrollbar">
        {Chats.map((chat) => {
          return (
            <ChatGroups
              onClick={() => {
                dispatch(disableSplash());
                dispatch(
                  setChatValues({
                    ChatName: chat.grpName,
                    ChatLogo: chat.profilePic,
                  })
                );
              }}
              profilePic={chat.profilePic}
              desc={chat.desc}
              grpName={chat.grpName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sidechats;
