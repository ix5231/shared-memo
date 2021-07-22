import { createSelector } from "@reduxjs/toolkit";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { User } from "src/models";
import { stateSelector } from "../selector";

export const firebaseSelector = createSelector(
  stateSelector,
  (state) => state.firebase
);

export const authSelector = createSelector(firebaseSelector, (fb) => fb.auth);

export const authStateSelector = createSelector(authSelector, (auth) =>
  !isLoaded(auth) ? "loading" : !isEmpty(auth) ? "active" : "inactive"
);

export const userSelector = createSelector(
  authSelector,
  (auth): [User | undefined, boolean] => {
    const loaded = isLoaded(auth);
    const signedIn = !isEmpty(auth);
    const user = signedIn
      ? {
          name: auth.displayName ?? "No name",
          uid: auth.uid,
        }
      : undefined;
    return [user, loaded];
  }
);
