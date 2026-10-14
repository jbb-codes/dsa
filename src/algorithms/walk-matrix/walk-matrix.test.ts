import { describe, it, expect } from "vitest";
import { walkMatrix } from "./walk-matrix.js";

describe("walkMatrix", () => {
  it("walks a square matrix clockwise", () => {
    expect(
      walkMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it("walks a wide matrix", () => {
    expect(
      walkMatrix([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ]),
    ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  it("walks a tall matrix", () => {
    expect(
      walkMatrix([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
    ).toEqual([1, 2, 4, 6, 5, 3]);
  });

  it("handles a single row", () => {
    expect(walkMatrix([[1, 2, 3]])).toEqual([1, 2, 3]);
  });

  it("handles a single column", () => {
    expect(walkMatrix([[1], [2], [3]])).toEqual([1, 2, 3]);
  });

  it("handles a single element", () => {
    expect(walkMatrix([[1]])).toEqual([1]);
  });

  it("returns an empty array for an empty matrix", () => {
    expect(walkMatrix([])).toEqual([]);
  });
});
