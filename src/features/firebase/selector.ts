import { createSelector } from "@reduxjs/toolkit";
import { stateSelector } from "../selector";

export const firebaseSelector = createSelector(
  stateSelector,
  (state) => state.firebase
);

export const authSelector = createSelector(firebaseSelector, (fb) => fb.auth);
