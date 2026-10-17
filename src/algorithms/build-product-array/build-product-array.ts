export const buildProductArray = (nums: number[]): number[] => {
  const result: number[] = new Array(nums.length).fill(1);

  // result[i] = product of everything left of i
  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i]!;
  }

  // multiply in product of everything right of i
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i]! *= rightProduct;
    rightProduct *= nums[i]!;
  }

  return result;
};
