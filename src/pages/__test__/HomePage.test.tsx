import { renderWithAuth, screen, waitFor } from "src/testUtils";
import * as memosService from "src/services/memosService";
import HomePage from "../HomePage";
import { Memo } from "src/models";

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
  const memoServiceSpy = jest
    .spyOn(memosService, "getMemos")
    .mockResolvedValueOnce(memos);

  renderWithAuth(<HomePage />, {
    name: "Test user",
    uid: "test",
  });

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
  expect(memoServiceSpy).toHaveBeenCalledTimes(1);

  jest.clearAllMocks();
});

export {};
