/**
 * @jest-environment node
 */

import fs from "fs";

import * as firebase from "@firebase/rules-unit-testing";

const projectId = "shared-memo-5ef64";

describe.skip("ユーザーデータの取得", () => {
  beforeAll(async () => {
    const rules = fs.readFileSync("firestore.rules", "utf8");
    await firebase.loadFirestoreRules({ projectId, rules });
  });

  afterAll(() => {
    Promise.all(firebase.apps().map((app) => app.delete()));
  });

  const storeWithAuth = (auth?: { uid: string }) =>
    firebase
      .initializeTestApp({
        projectId,
        auth,
      })
      .firestore();

  it("ユーザー本人は自分のメモを取得できる", async () => {
    const app = storeWithAuth({ uid: "alice" });
    await firebase.assertSucceeds(app.collection("users/alice/memos").get());
  });

  it("ユーザーは他人のメモを取得できない", async () => {
    const app = storeWithAuth({ uid: "bob" });
    await firebase.assertFails(app.collection("users/alice/memos").get());
  });

  it("ログインしていないユーザーはメモを取得できない", async () => {
    const app = storeWithAuth();
    await firebase.assertFails(app.collection("users/alice/memos").get());
  });
});

export {};
