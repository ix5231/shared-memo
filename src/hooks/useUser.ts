import { useSelector } from "react-redux";
import { RootState } from "src/state/store";

export const useUser = () =>
  useSelector((state: RootState) => state.auth.userData);
