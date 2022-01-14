import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
function Middleware(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, [dispatch]);

  return <>{props.children}</>;
}

export default Middleware;
