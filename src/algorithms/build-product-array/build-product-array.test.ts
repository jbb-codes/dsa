import { describe, it, expect } from "vitest";
import { buildProductArray } from "./build-product-array.js";

describe("buildProductArray", () => {
  it("returns product of all other items at each index", () => {
    expect(buildProductArray([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("handles a zero in the input", () => {
    expect(buildProductArray([1, 0, 3, 4])).toEqual([0, 12, 0, 0]);
  });

  it("handles multiple zeros", () => {
    expect(buildProductArray([0, 2, 0, 4])).toEqual([0, 0, 0, 0]);
  });

  it("handles negative numbers", () => {
    expect(buildProductArray([-1, 2, -3])).toEqual([-6, 3, -2]);
  });

  it("handles two items", () => {
    expect(buildProductArray([5, 7])).toEqual([7, 5]);
  });

  it("returns [1] for a single item", () => {
    expect(buildProductArray([5])).toEqual([1]);
  });

  it("returns an empty array for empty input", () => {
    expect(buildProductArray([])).toEqual([]);
  });
});
