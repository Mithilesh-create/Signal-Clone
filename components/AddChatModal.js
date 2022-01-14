import { CameraIcon } from "@heroicons/react/outline";
import { useState } from "react";
function AddChatModal(props) {
  const { onEnterChat } = props;
  const [Link, setLink] = useState("");
  const [GrpName, setGrpName] = useState("");
  return (
    <form className=" h-full w-full flex flex-col items-center justify-evenly">
      <div className="w-full h-1/4  flex items-center justify-center">
        <CameraIcon className=" rounded-full w-32 h-32 p-6 cursor-pointer bg-blue-600 border-2 text-white" />
      </div>
      <div className="w-full h-1/4  flex items-center justify-center">
        <input
          type="text"
          className="w-4/5 focus:border-blue-500 border-2 border-transparent h-1/2 text-xl p-2 outline-none rounded-xl"
          spellCheck="false"
          autoComplete="off"
          placeholder="Add Image Link"
          value={Link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
      </div>
      <div className="w-full h-1/4 flex flex-col items-center justify-evenly">
        <span className="w-4/5 font-semibold">Chat Name</span>
        <input
          type="text"
          className="w-4/5 focus:border-blue-500 border-2 border-transparent h-1/2 text-xl p-2 outline-none rounded-xl"
          spellCheck="false"
          autoComplete="off"
          placeholder="Chat Name"
          value={GrpName}
          onChange={(e) => {
            setGrpName(e.target.value);
          }}
        />
      </div>
      <div className="w-full h-1/6  flex items-center justify-center">
        <button
          className="bg-blue-600 p-4 text-xl font-bold rounded-lg border-2 border-white text-white"
          onClick={(e) => {
            e.preventDefault();
            if (GrpName.length > 0 && Link.length > 0) {
              onEnterChat({
                Link,
                GrpName,
              });
            }
          }}
        >
          Add Chat
        </button>
      </div>
    </form>
  );
}

export default AddChatModal;
