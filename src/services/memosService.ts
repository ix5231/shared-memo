import firebase from "firebase/app";
import "firebase/firestore";
import { Memo } from "src/models";

export const getMemos = (uid: string): Promise<Memo[]> =>
  firebase
    .firestore()
    .collection(`users/${uid}/memos`)
    .get()
    .then((m) =>
      m.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          title: data.title,
          content: data.content,
        };
      })
    );
