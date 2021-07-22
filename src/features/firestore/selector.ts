import { createSelector } from "@reduxjs/toolkit";
import { stateSelector } from "../selector";

export const firestoreSelector = createSelector(
  stateSelector,
  (state) => state.firestore
);

export const dataSelector = createSelector(
  firestoreSelector,
  (firestore) => firestore.data
);

export const orderedSelector = createSelector(
  firestoreSelector,
  (firestore) => firestore.ordered
);
