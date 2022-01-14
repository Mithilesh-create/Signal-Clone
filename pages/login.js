import { signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Img from "../assets/Signal.png";
import { auth, provider } from "../firebase/firebase";
import { actionLogin } from "../StateSlices/authSlice";
function login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    dispatch(
      actionLogin({
        userName: result.user.displayName,
        profilelogo: result.user.photoURL,
      })
    );
    router.push("/");
  };
  return (
    <div className="w-full h-screen font-fontpopins">
      <div className="bg-gray-900 w-full h-full flex items-center justify-center text-xl text-white">
        <div className="flex flex-col items-center justify-evenly w-full h-1/2">
          <Image src={Img} width={200} height={200} />
          <span className="text-3xl">Welcome to Signal</span>
          <span
            className="flex bg-blue-500 w-1/3 h-1/6 cursor-pointer select-none hover:bg-blue-400 items-center justify-center rounded-full"
            onClick={login}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}

export default login;
