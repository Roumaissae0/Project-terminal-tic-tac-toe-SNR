import { makeMove } from "../move-maker";
descibe("makeMove", () => {
  let board;
  beforeEach(() => {
    board = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];
  });
  test("make a valid move", () => {
    const result = makeMove(board, "1,3", "x");
    expect(result).toBe(true);
    expect(board[0][2]).toBe("x");
  });

  test("rejects a move outside the board", () => {
    const result = makeMove(board, "4,1", "o");
    expect(result).toBe(false);
  });

  test("rejects a move on an occupied space", () => {
    board[1][1] = "x";
    const result = makeMove(board, "2,2", "o");
    expect(result).toBe(false);
  });

  test("rejects invalid format", () => {
    const result = makeMove(board, "2-2", "x");
    expect(result).toBe(false);
  });
});
