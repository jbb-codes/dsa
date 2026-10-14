import { describe, it, expect } from "vitest";
import { DynamicArray } from "./dynamic-array.js";

const createArray = (...items: string[]): DynamicArray => {
  const arr = new DynamicArray();
  items.forEach((item) => arr.push(item));
  return arr;
};

describe("DynamicArray", () => {
  describe("get", () => {
    it("returns the item at an index", () => {
      const arr = createArray("a", "b", "c");

      expect(arr.get(1)).toBe("b");
    });

    it("returns undefined when the index is out of bounds", () => {
      const arr = createArray("a", "b", "c");

      expect(arr.get(3)).toBeUndefined();
      expect(arr.get(-1)).toBeUndefined();
    });
  });

  describe("push", () => {
    it("appends the item and returns the new length", () => {
      const arr = createArray("a", "b", "c");

      expect(arr.push("d")).toBe(4);
      expect(arr.get(3)).toBe("d");
    });
  });

  describe("pop", () => {
    it("removes and returns the last item", () => {
      const arr = createArray("a", "b", "c");

      expect(arr.pop()).toBe("c");
      expect(arr.length).toBe(2);
    });

    it("returns undefined when the array is empty", () => {
      const arr = createArray();

      expect(arr.pop()).toBeUndefined();
    });
  });

  describe("insert", () => {
    it("inserts in the middle and shifts later items right", () => {
      const arr = createArray("a", "b", "c");

      arr.insert(1, "x");

      expect([arr.get(0), arr.get(1), arr.get(2), arr.get(3)]).toEqual([
        "a",
        "x",
        "b",
        "c",
      ]);
      expect(arr.length).toBe(4);
    });

    it("allows inserting at the end", () => {
      const arr = createArray("a", "b", "c");

      arr.insert(3, "d");

      expect(arr.get(3)).toBe("d");
    });

    it("throws RangeError when the index is out of bounds", () => {
      const arr = createArray("a", "b", "c");

      expect(() => arr.insert(4, "x")).toThrow(RangeError);
      expect(() => arr.insert(-1, "x")).toThrow(RangeError);
    });
  });

  describe("remove", () => {
    it("removes the item and shifts later items left", () => {
      const arr = createArray("a", "b", "c");

      expect(arr.remove(1)).toBe("b");
      expect(arr.get(1)).toBe("c");
      expect(arr.length).toBe(2);
    });

    it("throws RangeError when the index is out of bounds", () => {
      const arr = createArray("a", "b", "c");

      expect(() => arr.remove(3)).toThrow(RangeError);
      expect(() => arr.remove(-1)).toThrow(RangeError);
    });
  });
});
