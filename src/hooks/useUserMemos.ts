import { usePromise } from "src/hooks/usePromise";
import { useUser } from "src/hooks/useUser";
import { Memo } from "src/models";
import { getMemos } from "src/services/memosService";

export const useUserMemos = () => {
  const userData = useUser();
  return usePromise<Memo[]>(
    userData && (() => getMemos(userData.uid)),
    userData && [userData.uid]
  );
};
