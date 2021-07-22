import { render, screen, waitFor } from "src/testUtils";
import HomePage from "../HomePage";
import { Memo } from "src/models";
import * as useUserMemosObj from "src/features/firestore/hooks";

const memos: Memo[] = [
  {
    id: "1",
    title: "title1",
    content: "content1",
  },
  {
    id: "2",
    title: "title2",
    content: "content2",
  },
  {
    id: "3",
    title: "title3",
    content: "content3",
  },
];

test("メモ一覧画面が表示される", async () => {
  const useUserMemosSpy = jest
    .spyOn(useUserMemosObj, "useUserMemos")
    .mockReturnValue(memos);

  render(<HomePage />);

  // メモ新規作成ボタン
  expect(
    screen.getByRole("button", { name: "新しいメモの作成" })
  ).toBeInTheDocument();

  await waitFor(() => screen.findByRole("list"));

  // メモのタイトル一覧
  expect(screen.getByText("title1")).toBeInTheDocument();
  expect(screen.getByText("title2")).toBeInTheDocument();
  expect(screen.getByText("title3")).toBeInTheDocument();

  // メモの取得が1回だけか
  expect(useUserMemosSpy).toHaveBeenCalledTimes(1);

  jest.clearAllMocks();
});

export {};
