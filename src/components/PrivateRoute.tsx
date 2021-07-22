import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { authStateSelector } from "src/features/firebase/selector";

interface Props {
  children: React.ReactNode;
  loading?: () => JSX.Element;
}

const PrivateRoute = ({ children, loading }: Props) => {
  const state = useSelector(authStateSelector);
  return (
    <>
      {state !== "loading" ? (
        state === "active" ? (
          children
        ) : (
          <Redirect to="/login" />
        )
      ) : (
        loading
      )}
    </>
  );
};

export default PrivateRoute;
