import { useRouter } from "next/router";

const WithPrivateRoute = ({ children }) => {
  const router = useRouter();
  const doc = typeof document !== "undefined";
  const login = doc && sessionStorage.getItem("loggedin") === "yes";
  !login && doc && router.push("/");
  return login ? <div>{children}</div> : <div></div>;
};

export default WithPrivateRoute;