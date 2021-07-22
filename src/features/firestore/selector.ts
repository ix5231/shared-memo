import { createSelector } from "@reduxjs/toolkit";
import { Memo } from "src/models";
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

export const memosSelector = createSelector(
  orderedSelector,
  (data) => data.myMemos as Memo[] | undefined
);

export const memoSelectorFactory = (id: string) =>
  createSelector(
    dataSelector,
    (data) => (data.myMemos && data.myMemos[id]) as Memo | undefined
  );
