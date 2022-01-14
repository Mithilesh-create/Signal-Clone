import Image from "next/image";
import { LogoutIcon, PencilIcon, SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { actionLogout, authSliceProfile } from "../StateSlices/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Modal from "react-modal/lib/components/Modal";
import AddChatModal from "./AddChatModal";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

function SideHeader() {
  const [Show, setShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const signoutFunc = async () => {
    signOut(auth)
      .then(() => {
        dispatch(actionLogout());
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [ShowModal, setShowModal] = useState(false);
  const Profile = useSelector(authSliceProfile);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      height: "60%",
      width: "60%",
      maxWidth: "500px",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0ea5e9",
    },
  };
  return (
    <>
      <div className="w-full h-24 flex items-center justify-evenly border-b border-gray-600 relative">
        <Image
          src={
            Profile
              ? Profile
              : "https://lh3.googleusercontent.com/a/AATXAJyUelmnW4jeulXXvzHy4n7cX-kSZrlrWfBMDIaw=s96-c"
          }
          width={50}
          height={50}
          className="rounded-full cursor-pointer"
          onClick={() => {
            setShow(!Show);
          }}
        />
        <div className="w-3/5 h-1/2 rounded-full flex items-center relative">
          <input
            className="w-full bg-gray-800 h-full rounded-full flex items-center outline-none
                    border-2 
                    focus:border-blue-500 focus:border-2 border-transparent pl-10 text-white"
            placeholder="Search"
          />
          <SearchIcon
            width={25}
            height={25}
            className="absolute top-15 left-2 text-gray-500"
          />
        </div>
        <PencilIcon
          width={30}
          height={30}
          className="text-gray-300 cursor-pointer"
          onClick={() => {
            setShowModal(true);
          }}
        />

        <Modal
          isOpen={ShowModal}
          onRequestClose={() => {
            setShowModal(false);
          }}
          style={customStyles}
          ariaHideApp={false}
        >
          <AddChatModal
            onEnterChat={async (data) => {
              if (data) {
                const { Link, GrpName } = data;
                await setDoc(doc(db, auth.currentUser.uid, GrpName), {
                  profileImgLink: Link,
                  profileGroupName: GrpName,
                  timestamp: serverTimestamp(),
                });
              }
            }}
          />
        </Modal>

        {Show && (
          <div
            className="w-1/2 h-20 rounded-lg bg-black opacity-80 ml-2 absolute top-full left-0 z-10 text-white flex flex-col text-2xl items-center justify-evenly cursor-pointer"
            onClick={signoutFunc}
          >
            <span className="flex items-center justify-between w-3/4">
              Logout
              <LogoutIcon width={30} height={30} />
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default SideHeader;
