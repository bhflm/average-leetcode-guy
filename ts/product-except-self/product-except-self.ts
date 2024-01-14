export function productExceptSelf(nums: number[]): number[] {

  const out: number[] = [];


  let prefix = 1;

  // 1st pass, fill out as prefix 
  for(let i = 0; i < nums.length; i ++) {
    out[i] = prefix;
    prefix = prefix * nums[i]
  };

  let postfix = 1;
  for(let i = nums.length - 1; i >= 0; i --) {
    out[i] = out[i] * postfix;
    postfix = postfix * nums[i];
  };

  return out;
};